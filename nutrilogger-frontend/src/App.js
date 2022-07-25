import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'; 
import { Container } from '@material-ui/core';

import Home from './components/Home/Home';
import MainNav from "./components/MainNav/MainNav";

const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth='lg'>
                <MainNav />
                <Switch>
                    <Route path='/' exact component={() => <Redirect to='/search' />} />
                    <Route path='/search' exact component={Home} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;