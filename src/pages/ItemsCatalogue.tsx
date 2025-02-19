import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { itemsCatalogueCatagoryProducts, itemsCatalogueSearchProducts } from "../api.services";
import { ItemCardDef } from "./pages.types";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./pages.styles.css";
import Header from "../components/Header.component";
import { useHomeStore } from "./pages.stores";
import { useMemo } from "react";
import styles from "./pages.styles";
import FilterSort from "../components/FilterSort.component";

export default function ItemsCatalogue() {
    const { searchedText, suggestedText, category } = useParams();
    const { showNavigation, toggleShowNavigation } = useHomeStore();

    if (!searchedText && !suggestedText && !category) {
        console.log(`Window params issue ${window.location.href}`);
    }

    const productsFromSearchedText = useQuery({
        queryKey: ['products-from-searched-text', searchedText],
        queryFn: () => itemsCatalogueSearchProducts(searchedText ?? ""),
        enabled: searchedText && searchedText.trim().length > 0 && searchedText !== suggestedText ? true : false
    })

    const productsFromSuggestedText = useQuery({
        queryKey: ['products-from-suggested-text', suggestedText],
        queryFn: () => itemsCatalogueSearchProducts(suggestedText ?? ""),
        enabled: suggestedText && suggestedText.trim().length > 0 ? true : false
    })

    const productsFromCategory = useQuery({
        queryKey: ['products-from-category', category],
        queryFn: () => itemsCatalogueCatagoryProducts(category ?? ""),
        enabled: category && category.trim().length > 0 ? true : false
    })

    const productsToShow:ItemCardDef[] = useMemo(() => {
        if (suggestedText === searchedText && productsFromSuggestedText.data) return productsFromSuggestedText.data;
        if (suggestedText && searchedText && productsFromSuggestedText.data && productsFromSearchedText.data) return [...productsFromSuggestedText.data, ...productsFromSearchedText.data];
        if (category && productsFromCategory.data) return productsFromCategory.data;
        return [];
    }, [productsFromSearchedText.data, productsFromSuggestedText.data, productsFromCategory.data, suggestedText, searchedText, category])

    const ProductCard = ({item}:{item:ItemCardDef}) => {
        return (
            <Card sx={styles.itemCatalogueItemCard}>
                <CardMedia component="img" image={item.thumbnail} alt="" loading="lazy" />
                <CardContent>
                    <Typography>{item.title}</Typography>
                </CardContent>
            </Card>
        )
    }

    return (
        <div>
            <Header toggleShowNavigation={toggleShowNavigation} />
            {
                searchedText || suggestedText || category ?
                    productsFromSearchedText.isLoading || productsFromSuggestedText.isLoading || productsFromCategory.isLoading ?
                    <span>Loading...</span> :
                    <div className="itemCatalogueSections">
                        <FilterSort onChange={() => {}}/>
                        <Box sx={styles.itemCatalogueItemsList}>
                            {productsToShow.map((item:ItemCardDef) => <ProductCard key={item.id} item={item} />)}
                        </Box>
                    </div>
                : <Typography variant="h6">Oops, something went wrong!</Typography>
            }
        </div>
    )
}