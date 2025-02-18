type HeaderProps = {
    toggleShowNavigation: () => void
}

type FilterSortConfig = {
    sortBy: "relevance" | "price-low-to-high" | "price-high-to-low" | "rating-low-to-high" | "rating-hign-to-low" | "none",
    priceRange: {
        min: number,
        max: number
    },
    minRating: number,
    availability: "In Stock" | "Low Stock" | "Out of Stock" | "all"
}

type FilterSortProps = {
    onChange: (current: FilterSortConfig) => void
}

export type {
    HeaderProps,
    FilterSortConfig,
    FilterSortProps
}