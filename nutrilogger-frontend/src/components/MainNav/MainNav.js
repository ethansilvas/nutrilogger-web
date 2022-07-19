import React from "react";
import { AppBar, Typography } from "@material-ui/core";

import useStyles from './styles';

const MainNav = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.mainNav}>
            <Typography variant='h4' align='center'>Nutrilogger</Typography>
        </AppBar>
    );
}

export default MainNav;


