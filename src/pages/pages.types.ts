type HomeStoreDef = {
    showNavigation: boolean,
    toggleShowNavigation: () => void
}

type ReviewDef = {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}

export type {
    HomeStoreDef,
    ReviewDef
}