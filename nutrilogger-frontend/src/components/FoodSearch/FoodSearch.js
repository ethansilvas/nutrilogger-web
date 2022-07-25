import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import Food from '../Food/Food';
import { getFood } from '../../actions/search';
import useStyles from './styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const FoodSearch = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const food = useSelector((state) => state.food);

    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    const [search, setSearch] = useState('');

    console.log(food);

    useEffect(() => {
        dispatch(getFood());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchFood(e);
        }
    }

    const searchFood = (e) => {
        if (search.trim()) {
            dispatch(getFood({ search }))
            history.push(`/search?searchQuery=${search}`);
        } else {
            e.preventDefault();
            history.push('/');
        }
    }

    return (
        <>
            <Paper className={classes.paper}>
                <form className={classes.foodSearchForm} autoComplete='off' noValidate onSubmit={handleSubmit}>
                    <Typography variant='h5'>Search for a food:</Typography>
                    <TextField name='search' variant='outlined' label='Search for a food, brand, restaurant, etc.' fullWidth
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e)}
                    />
                    <Button className={classes.searchButton} onClick={searchFood} variant='contained' fullWidth>Search</Button>
                </form>
            </Paper>
            <Grid container alignItems='stretch' spacing={3}>
                { food.foods ? food.foods.map((food) => ( <Grid item xs={12} sm={3}><Food description={food.description} /></Grid> )) : 'yo' }
            </Grid>
        </>
    );
}

export default FoodSearch;



