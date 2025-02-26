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
import Home3ItemsDisplay from "../components/Home3ItemsDisplay";
import Home4ItemsDisplay from "../components/Home4ItemsDisplay";
import HomeScrollList from "../components/HomeScrollList";

export default function Home() {
    const { showNavigation, toggleShowNavigation } = useHomeStore();
    const navigate = useNavigate();

    const handleCategoryClick = (itemCategory:string) => {
        navigate(`/search/${itemCategory}`)
    }

    const dummyHomeData = getHomeSectionCategories();

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
                <Box sx={styles.homeSectionShopBy}>
                    <Typography variant="h5">{dummyHomeData[0].name}</Typography>
                    <Home3ItemsDisplay categoryId={dummyHomeData[0].slug} />
                </Box>
                <Box sx={styles.homeSectionShopBy}>
                    <Typography variant="h5">{dummyHomeData[1].name}</Typography>
                    <Home4ItemsDisplay categoryId={dummyHomeData[1].slug} />
                </Box>
                <Box sx={styles.homeSectionShopBy}>
                    <Typography variant="h5">{dummyHomeData[2].name}</Typography>
                    <HomeScrollList categoryId={dummyHomeData[2].slug} />
                </Box>
            </div>
        </div>
    )
}