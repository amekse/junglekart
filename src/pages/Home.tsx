import { Box, Chip, Typography } from "@mui/material";
import AdBanner from "../components/AdBanner";
import Header from "../components/Header.component";
import { useHomeStore } from "./pages.stores";
import { categories } from "./pages.constants";

export default function Home() {
    const { showNavigation, toggleShowNavigation } = useHomeStore();

    const handleCategoryClick = (itemCategory:string) => {
        console.log('CP1', itemCategory)
    }

    return (
        <div>
            <Header toggleShowNavigation={toggleShowNavigation} />
            <div className="homeContent">
                <AdBanner orientation="landscape" />
                <Typography variant="h5">Shop by categories: </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap', alignItems: 'flex-start', gap: '4px' }}>
                    {
                        categories.map(category => <Chip label={category.name} onClick={() => handleCategoryClick(category.slug)} />)
                    }
                </Box>
            </div>
        </div>
    )
}