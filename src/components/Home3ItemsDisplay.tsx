import { useQuery } from "@tanstack/react-query"
import { homeCatagoryItems } from "../api.services"
import { HomeSectionDef, QuickItemInfoDef } from "./components.types"
import { useNavigate } from "react-router-dom";
import { Box, Skeleton } from "@mui/material";
import styles from "./components.styles";
import ItemCard from "./ItemCard.component";
import AdBanner from "./AdBanner";


export default function Home3ItemsDisplay({categoryId}:HomeSectionDef) {
    const { data, isLoading} = useQuery({
        queryKey: ['home-category-items', categoryId],
        queryFn: () => homeCatagoryItems(categoryId)
    })

    const navigate = useNavigate();

    if (isLoading) {
        return <Skeleton sx={styles.homeScrollableItemsList} />
    }

    const handleItemClick = (itemId:string|number) => {
        navigate(`/item/${itemId}`);
    }

    if (isLoading) {
        return (
            <Box>
                <Box>
                    <Skeleton />
                </Box>
                <Box>
                    <Box>
                        <Skeleton />
                    </Box>
                    <Box>
                        <Skeleton />
                    </Box>
                </Box>
            </Box>
        )
    }

    return (
        <div className="home3TileContainer">
            <Box sx={styles.home3ItemsDisplay}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {
                        data[0] && <Box>
                            <ItemCard item={data[1]} />
                        </Box>
                    }
                    {
                        data[1] && <Box>
                            <ItemCard item={data[2]} />
                        </Box>
                    }
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {
                        data[2] && <Box>
                            <ItemCard item={data[1]} />
                        </Box>
                    }
                    {
                        data[3] && <Box>
                            <ItemCard item={data[2]} />
                        </Box>
                    }
                </Box>
            </Box>
            <AdBanner orientation="square" />
        </div>
    )
}