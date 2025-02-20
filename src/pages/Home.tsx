import { Box, Chip, Skeleton, Typography } from "@mui/material";
import AdBanner from "../components/AdBanner";
import Header from "../components/Header.component";
import { useHomeStore } from "./pages.stores";
import { categories } from "../common.constants";
import { useNavigate } from "react-router-dom";
import styles from "./pages.styles";
import { getHomeSectionCategories } from "../dummy.services";
import { useQuery } from "@tanstack/react-query";
import { homeCatagoryItems } from "../api.services";
import { QuickItemInfoDef } from "../components/components.types";
import ItemCard from "../components/ItemCard.component";

export default function Home() {
    const { showNavigation, toggleShowNavigation } = useHomeStore();
    const navigate = useNavigate();

    const handleCategoryClick = (itemCategory:string) => {
        navigate(`/search/${itemCategory}`)
    }

    const ScrollableCategoryItemsList = ({categoryId}:{categoryId:string}) => {
        const { data, isLoading} = useQuery({
            queryKey: ['home-category-items', categoryId],
            queryFn: () => homeCatagoryItems(categoryId)
        })

        if (isLoading) {
            return <Skeleton sx={styles.homeScrollableItemsList} />
        }

        return (
            <Box sx={styles.homeScrollableItemsList}>
                {
                    data.map((item:QuickItemInfoDef) => <ItemCard item={item} />)
                }
            </Box>
        )
    }

    return (
        <div>
            <Header toggleShowNavigation={toggleShowNavigation} />
            <div className="homeContent">
                <AdBanner orientation="landscape" />
                <Typography variant="h5">Shop by categories: </Typography>
                <Box sx={styles.homeSectionCategoryBox}>
                    {
                        categories.map(category => <Chip label={category.name} onClick={() => handleCategoryClick(category.slug)} />)
                    }
                </Box>
                <Typography variant="h5">Recently viewed: </Typography>
                <Box sx={styles.homeSectionShopBy}>
                    {/* TODO: Add content */}
                </Box>
                {
                    getHomeSectionCategories().map(category => 
                        <Box sx={styles.homeSectionShopBy}>
                            <Typography variant="h5">{category.name}</Typography>
                            <ScrollableCategoryItemsList categoryId={category.slug} />
                        </Box>
                    )
                }
            </div>
        </div>
    )
}