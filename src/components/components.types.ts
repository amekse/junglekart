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

type AdBannerStyleProps = {
    height?: number | string,
    width?: number | string
}

type AdBannerProps = {
    orientation: "landscape" | "potrait" | "square",
    customStyle?: AdBannerStyleProps
}

type ItemCardDef = {
    id: number,
    title: string,
    description: string,
    category: string,
    price: string,
    rating: string,
    stock: string,
    tags: string[],
    sku: string,
    availabilityStatus: string,
    thumbnail: string,
}

type QuickItemInfoDef = {
    id: string | number,
    title: string,
    thumbnail: string
}

export type {
    HeaderProps,
    FilterSortConfig,
    FilterSortProps,
    AdBannerProps,
    AdBannerStyleProps,
    ItemCardDef,
    QuickItemInfoDef
}