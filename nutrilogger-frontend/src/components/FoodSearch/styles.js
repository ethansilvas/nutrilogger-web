import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    foodSearchForm: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '15px'
    },

    paper: {
        padding: '20px',
        marginBottom: '15px'
    },

    searchButton: {
        backgroundColor: 'lightGreen',
        '&:hover': {
            backgroundColor: 'darkSeaGreen'
        }
    },
}));