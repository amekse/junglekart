const styles = {
    itemCatalogueItemsList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 4,

        width: '100%'
    },
    homeSectionCategoryBox: {
        display: 'flex',
        wid: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        gap: '4px' 
    },
    homeSectionShopBy: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '4px'
    },
    homeScrollableItemsList: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflowX: 'auto',
        gap: '16px',
        bgcolor: 'secondary.light',
        padding: '8px',
        borderRadius: '4px'
    },
    itemDetailsPurchaseButtons: {
        borderRadius: '32px',
        width: 'inherit'
    },
    itemDetailsReviewCard: {
        width: '45%'
    },
    itemDetailsImgSkeleton: {
        width: '100%',
        height: '60vh',
    },
    itemDetailsLeftSkeleton: {
        height: '30vh',
        width: '70%'
    },
    itemDetailsRightSkeleton: {
        height: '30vh',
        width: '30%'
    }
}

export default styles;