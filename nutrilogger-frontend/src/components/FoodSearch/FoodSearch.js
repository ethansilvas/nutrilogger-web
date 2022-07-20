import React, { useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { getFood } from '../../actions/search';
import useStyles from './styles';

const FoodSearch = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const food = useSelector((state) => state.food);

    console.log(food);

    useEffect(() => {
        dispatch(getFood());
    }, [dispatch]);

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



