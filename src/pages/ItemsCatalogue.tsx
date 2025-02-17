import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { itemsCatalogueSearchProducts } from "../api.services";
import { ItemCardDef } from "./pages.types";
import { Masonry } from "@mui/lab";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./pages.styles.css";
import Header from "../components/Header.component";
import { useHomeStore } from "./pages.stores";

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

    return (
        <div>
            <Header toggleShowNavigation={toggleShowNavigation} />
            {
                productsFromSearchedText.isLoading || productsFromSuggestedText.isLoading ?
                <span>Loading...</span> :
                <div className="itemCatalogueSections">
                    <div className="itemCatalogueFilterAndSort">
                        <div>Sort</div>
                        <div>Price</div>
                        <div>Rating</div>
                        <div>Availability</div>
                    </div>
                    <Masonry spacing={2}>
                        {productsFromSuggestedText.data.map((item:ItemCardDef) => 
                            <Card>
                                <CardMedia component="img" image={item.thumbnail} alt="" />
                                <CardContent>
                                    <Typography>{item.title}</Typography>
                                </CardContent>
                            </Card>
                        )}
                        {productsFromSearchedText.data.map((item:ItemCardDef) => 
                            <Card>
                                <CardMedia component="img" image={item.thumbnail} alt="" />
                                <CardContent>
                                    <Typography>{item.title}</Typography>
                                </CardContent>
                            </Card>
                        )}
                    </Masonry>
                </div>
            }
        </div>
    )
}