import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { itemsCatalogueSearchProducts } from "../api.services";
import { ItemCardDef } from "./pages.types";
import { Box, Button, Card, CardContent, CardMedia, FormControl, FormControlLabel, Input, InputAdornment, Radio, RadioGroup, Rating, Skeleton, Typography } from "@mui/material";
import "./pages.styles.css";
import Header from "../components/Header.component";
import { useHomeStore } from "./pages.stores";
import { Suspense, useMemo, useState } from "react";
import styles from "./pages.styles";

export default function ItemsCatalogue() {
    const { searchedText, suggestedText } = useParams();
    const [filterConfig, setFilterConfig] = useState({});
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
                    <div className="itemCatalogueFilterAndSort">
                        <Typography variant="subtitle1" fontWeight={800}>Sort By:</Typography>
                        <Box sx={styles.filterAndSortColSec}>
                            <Button variant="text" size="small">Relevance</Button>
                            <Button variant="text" size="small">Price: Low to High</Button>
                            <Button variant="text" size="small">Price: High to Low</Button>
                            <Button variant="text" size="small">Rating: Low to High</Button>
                            <Button variant="text" size="small">Rating: High to Low</Button>
                        </Box>
                        <Typography variant="subtitle1" fontWeight={800}>Price Range:</Typography>
                        <Box sx={styles.filterAndSortRowSec}>
                            <Input type="number" placeholder="Min" startAdornment={<InputAdornment position="start">$</InputAdornment>} />
                            <Input type="number" placeholder="Max" startAdornment={<InputAdornment position="start">$</InputAdornment>} />
                        </Box>
                        <Typography variant="subtitle1" fontWeight={800}>Minimum Rating:</Typography>
                        <Box>
                            <Rating precision={0.5} defaultValue={0} />
                        </Box>
                        <Typography variant="subtitle1" fontWeight={800}>Availability:</Typography>
                        <Box>
                            <FormControl>
                                <RadioGroup defaultValue="In Stock">
                                    <FormControlLabel value="In Stock" label="In Stock" control={<Radio/>} />
                                    <FormControlLabel value="Low Stock" label="Low Stock" control={<Radio/>} />
                                    <FormControlLabel value="Out of Stock" label="Out of Stock" control={<Radio/>} />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </div>
                    <Box sx={styles.itemCatalogueItemsList}>
                        {productsToShow.map((item:ItemCardDef) => <ProductCard key={item.id} item={item} />)}
                    </Box>
                </div>
            }
        </div>
    )
}