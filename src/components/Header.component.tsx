import { Autocomplete, Box, IconButton, TextField, Typography } from "@mui/material";
import styles from "./components.styles";
import { Menu as MenuIcon, ShoppingCart as ShoppingCartIcon, Info as InfoIcon } from "@mui/icons-material";
import { HeaderProps } from "./components.types";
import { headerSearchBarSuggestion } from "../api.services";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { throttle } from "../utils";
import { useNavigate } from "react-router-dom";

export default function Header({ toggleShowNavigation }: HeaderProps) {
    const [suggestText, setSuggestText] = useState<String>("");
    const suggestionThrottle = throttle(headerSearchBarSuggestion, 150);
    const navigate = useNavigate();

    const suggestionsQuery = useQuery({
        queryKey: ['header-suggest', suggestText],
        queryFn: () => suggestionThrottle(suggestText),
        enabled: suggestText.trim().length > 0
    });

    const suggestionsToShow = useMemo(() => {
        return suggestionsQuery.data ? suggestionsQuery.data.map((item: {id:number, title:string}) => item.title) : [];
    }, [suggestionsQuery.data])

    const handleSearchClick = (searchText:String, ) => {
        if (suggestText === searchText) {
            navigate(`/search/${suggestText}`);
        } else {
            navigate(`/search/${suggestText}/${searchText}`);
        }
    }

    return (
        <Box sx={styles.header}>
            <Box sx={styles.headerSubSection}>
                <IconButton>
                    <MenuIcon onClick={toggleShowNavigation} />
                </IconButton>
                <Typography variant="h6" fontWeight={800}>JungleKart</Typography>
            </Box>
            <Autocomplete fullWidth freeSolo onChange={(e, v) => handleSearchClick(v as String)} options={!suggestionsQuery.isLoading ? suggestionsToShow : []} renderInput={(params) => <TextField {...params} label="Search" onChange={e => setSuggestText(e.target.value)} />}  />
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