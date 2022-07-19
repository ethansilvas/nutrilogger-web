import React from "react";
import FoodSearch from "../FoodSearch/FoodSearch";
import { Container, Grow, Grid } from "@material-ui/core";
import MainNav from "../MainNav/MainNav";

const Home = () => {
    return (
        <Container maxWidth='lg'>
            <MainNav></MainNav>
            <Grow in>
                <Container>
                    <Grid container spacing={2} justifyContent='space-between'>
                        <Grid item xs={12}><FoodSearch></FoodSearch></Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default Home;





