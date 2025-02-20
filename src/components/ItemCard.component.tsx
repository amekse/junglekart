import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import styles from "./components.styles";
import { ItemCardDef, QuickItemInfoDef } from "./components.types";

export default function ItemCard({item}:{item:ItemCardDef|QuickItemInfoDef}) {
    return (
        <Card sx={styles.itemCard}>
            <CardMedia component="img" image={item.thumbnail} alt="" loading="lazy" />
            <CardContent>
                <Typography>{item.title}</Typography>
            </CardContent>
        </Card>
    )
}