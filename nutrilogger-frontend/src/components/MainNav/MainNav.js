import React from "react";
import { AppBar, Typography } from "@material-ui/core"; 

const MainNav = () => {
    return (
        <AppBar position='static'>
            <Typography variant='h4' align='center'>Nutrilogger</Typography>
        </AppBar>
    );
}

export default MainNav;


