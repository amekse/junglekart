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
    }
}

export default styles;