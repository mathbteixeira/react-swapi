import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Home from './screens/home';
import Detail from './screens/detail';
import Film from './screens/film';
import logo from './img/sw_logo.png';

const menu = {
    'color': 'yellow',
    'background': 'black',
    'text-decoration': 'none',
    'fontFamily': `'Pathway Gothic One', sans-serif`
};

const img_responsive = {
    'max-width': '100%',
    'height': 'auto'
};

const no_bullets = {
    'list-style-type': 'none'
};

const App = () => {
    return [
        <BrowserRouter>
            <ul style={no_bullets}>
                <li>
                    <Link to="/" style={menu} >
                        <img style={img_responsive} src={logo} alt="logo"/>
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route path='/films/:id'> <Film/> </Route>
                <Route path='/detail/:id'> <Detail/> </Route>
                <Route path='/'> <Home/> </Route>
            </Switch>
        </BrowserRouter>
    ];
};

export default App;

