import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import styles from "./components.styles";
import { ItemCardDef, QuickItemInfoDef } from "./components.types";

export default function ItemCard({item, onClick}:{item:ItemCardDef|QuickItemInfoDef, onClick?: (itemId: string|number) => void}) {
    const handleCardClick = () => {
        if (onClick) {
            onClick(item.id);
        }
    }

    return (
        <Card sx={styles.itemCard}>
            <CardActionArea onClick={handleCardClick}>
                <CardMedia sx={{ bgcolor: 'background.paper' }} component="img" image={item.thumbnail} alt="" loading="lazy" />
                <CardContent>
                    <Typography sx={styles.itemCardTitle}>{item.title}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}