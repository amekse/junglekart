import { Box, Button, FormControl, FormControlLabel, Input, InputAdornment, Radio, RadioGroup, Rating, Typography } from "@mui/material";
import "./component.styles.css";
import { useState } from "react";
import styles from "./components.styles";
import { FilterSortConfig, FilterSortProps } from "./components.types";

export default function FilterSort(props:FilterSortProps) {
    const { onChange } = props;
    const [filterConfig, setFilterConfig] = useState<FilterSortConfig>({
        sortBy: "none",
        priceRange: {
            min: 0,
            max: Infinity
        },
        minRating: 0,
        availability: "all"
    });

    return (
        <div className="itemCatalogueFilterAndSort">
            <Typography variant="subtitle1" fontWeight={800}>Sort By:</Typography>
            <Box sx={styles.filterAndSortColSec}>
                <Button variant="text" size="small">Relevance</Button>
                <Button variant="text" size="small">Price: Low to High</Button>
                <Button variant="text" size="small">Price: High to Low</Button>
                <Button variant="text" size="small">Rating: Low to High</Button>
                <Button variant="text" size="small">Rating: High to Low</Button>
            </Box>
            <Typography variant="subtitle1" fontWeight={800}>Price Range:</Typography>
            <Box sx={styles.filterAndSortRowSec}>
                <Input type="number" placeholder="Min" startAdornment={<InputAdornment position="start">$</InputAdornment>} />
                <Input type="number" placeholder="Max" startAdornment={<InputAdornment position="start">$</InputAdornment>} />
            </Box>
            <Typography variant="subtitle1" fontWeight={800}>Minimum Rating:</Typography>
            <Box>
                <Rating precision={0.5} defaultValue={0} />
            </Box>
            <Typography variant="subtitle1" fontWeight={800}>Availability:</Typography>
            <Box>
                <FormControl>
                    <RadioGroup defaultValue="In Stock">
                        <FormControlLabel value="In Stock" label="In Stock" control={<Radio/>} />
                        <FormControlLabel value="Low Stock" label="Low Stock" control={<Radio/>} />
                        <FormControlLabel value="Out of Stock" label="Out of Stock" control={<Radio/>} />
                    </RadioGroup>
                </FormControl>
            </Box>
        </div>
    )
}