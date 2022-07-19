import React from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import useStyles from './styles';

const FoodSearch = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <form className={classes.foodSearchForm} autoComplete='off' noValidate >
                <Typography variant='h5'>Search for a food:</Typography>
                <TextField name='food' variant='outlined' label='"Banana", "McDonalds", ...' fullWidth></TextField>
            </form>
        </Paper>
    );
}

export default FoodSearch;



