import React from "react";
import { AppBar, Avatar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from './styles';

const MainNav = () => {
    const classes = useStyles();

    const user = null;

    return (
        <AppBar position='static' className={classes.mainNav}>
            <Typography className={classes.heading} component={Link} to='/' variant='h4' align='center'>Nutrilogger</Typography>
            <Toolbar className={classes.toolbar}>
                {
                    user ? (
                        <Avatar></Avatar>
                    ) : (
                        'oh no'
                    )
                }
            </Toolbar>
        </AppBar>
    );
}

export default MainNav;


