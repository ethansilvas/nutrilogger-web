import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from './styles';

const MainNav = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.mainNav}>
            <Typography className={classes.heading} component={Link} to='/' variant='h4' align='center'>Nutrilogger</Typography>
        </AppBar>
    );
}

export default MainNav;


