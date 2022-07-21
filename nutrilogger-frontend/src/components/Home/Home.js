import React from "react";
import FoodSearch from "../FoodSearch/FoodSearch";
import { Container, Grow, Grid } from "@material-ui/core";

const Home = () => {
    return (
        <>
            <Grow in>
                <Container>
                    <Grid container spacing={2} justifyContent='space-between'>
                        <Grid item xs={12}><FoodSearch /></Grid>
                    </Grid>
                </Container>
            </Grow>
        </>
    );
}

export default Home;





