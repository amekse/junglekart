import { Autocomplete, Box, IconButton, TextField, Typography } from "@mui/material";
import styles from "./components.styles";
import { Menu as MenuIcon, ShoppingCart as ShoppingCartIcon, Info as InfoIcon } from "@mui/icons-material";
import { HeaderProps } from "./components.types";

export default function Header({ toggleShowNavigation }: HeaderProps) {

    return (
        <Box sx={styles.header}>
            <Box sx={styles.headerSubSection}>
                <IconButton>
                    <MenuIcon onClick={toggleShowNavigation} />
                </IconButton>
                <Typography variant="h6" fontWeight={800}>JungleKart</Typography>
                <Autocomplete freeSolo options={[]} renderInput={(params) => <TextField {...params} label="Search" />}  />
            </Box>
            <Box sx={styles.headerSubSection}>
                <IconButton>
                    <ShoppingCartIcon />
                </IconButton>
                <IconButton>
                    <InfoIcon />
                </IconButton>
            </Box>
        </Box>
    )
}