import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profie';
import newIncidents from './pages/newincidents';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/incidents/new" component={newIncidents} />
        </Switch>
    </BrowserRouter>
)
export default Rotas;