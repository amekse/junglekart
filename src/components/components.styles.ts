const styles = {
    header: {
        width: '100%',
        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
        padding: '8px'
    },
    headerSubSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px'
    },
    filterAndSortRowSec: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '8px'
    },
    filterAndSortColSec: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '8px'
    },
    itemCard: {
        width: '12vw',
        flexShrink: '0'
    },
    itemCardTitle: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        display: "block",
        width: "100%",
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
}

export default styles;