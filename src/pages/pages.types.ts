type HomeStoreDef = {
    showNavigation: boolean,
    toggleShowNavigation: () => void
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

export type {
    HomeStoreDef,
    ItemCardDef
}