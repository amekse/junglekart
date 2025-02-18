import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { itemsCatalogueSearchProducts } from "../api.services";
import { ItemCardDef } from "./pages.types";
import { Box, Card, CardContent, CardMedia, Skeleton, Typography } from "@mui/material";
import "./pages.styles.css";
import Header from "../components/Header.component";
import { useHomeStore } from "./pages.stores";
import { useMemo, useState } from "react";
import styles from "./pages.styles";
import FilterSort from "../components/FilterSort.component";

export default function ItemsCatalogue() {
    const { searchedText, suggestedText } = useParams();
    const { showNavigation, toggleShowNavigation } = useHomeStore();

    const productsFromSearchedText = useQuery({
        queryKey: ['products-from-searched-text', searchedText],
        queryFn: () => itemsCatalogueSearchProducts(searchedText ?? ""),
        enabled: searchedText && searchedText.trim().length > 0 ? true : false
    })

    const productsFromSuggestedText = useQuery({
        queryKey: ['products-from-suggested-text', suggestedText],
        queryFn: () => itemsCatalogueSearchProducts(suggestedText ?? ""),
        enabled: suggestedText && suggestedText.trim().length > 0 ? true : false
    })

    const productsToShow = useMemo(() => {
        if (productsFromSearchedText.isLoading || productsFromSuggestedText.isLoading) return [];
        return [...productsFromSuggestedText.data, ...productsFromSearchedText.data];
    }, [productsFromSearchedText.data, productsFromSuggestedText.data, productsFromSearchedText.isLoading, productsFromSuggestedText.isLoading])

    const ProductCard = ({item}:{item:ItemCardDef}) => {
        const [imageLoading, setImageLoading] = useState(true);
        return (
            <Card sx={styles.itemCatalogueItemCard}>
                {imageLoading && <Skeleton variant="rectangular" width="100%" height={300} />}
                <CardMedia component="img" image={item.thumbnail} alt="" onLoad={() => setImageLoading(false)} />
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
                productsFromSearchedText.isLoading || productsFromSuggestedText.isLoading ?
                <span>Loading...</span> :
                <div className="itemCatalogueSections">
                    <FilterSort onChange={() => {}}/>
                    <Box sx={styles.itemCatalogueItemsList}>
                        {productsToShow.map((item:ItemCardDef) => <ProductCard key={item.id} item={item} />)}
                    </Box>
                </div>
            }
        </div>
    )
}