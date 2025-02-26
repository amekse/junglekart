import { useQuery } from "@tanstack/react-query"
import { homeCatagoryItems } from "../api.services"
import { HomeSectionDef, QuickItemInfoDef } from "./components.types"
import { Box, Skeleton } from "@mui/material"
import styles from "./components.styles"
import ItemCard from "./ItemCard.component"
import { useNavigate } from "react-router-dom"

export default function HomeScrollList({categoryId}:HomeSectionDef) {
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

    return (
        <Box sx={styles.homeScrollableItemsList}>
            {
                data.map((item:QuickItemInfoDef) => <ItemCard item={item} onClick={() => handleItemClick(item.id)} />)
            }
            {
                data.map((item:QuickItemInfoDef) => <ItemCard item={item} />) // FIXME: Repeating list due to lack of dummy data
            }
        </Box>
    )
}