import { makeStyles } from "@material-ui/core";
import { lightGreen } from "@material-ui/core/colors";

export default makeStyles(() => ({
    mainNav: {
        marginBottom: '20px',
        borderRadius: 10,
        backgroundColor: 'lightGreen',
    },

    heading: {
        color: 'rgba(0, 0, 0, 0.87)',
        textDecoration: 'none'
    }
}));