import React from 'react';
import './app.css';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Homepage from '../components/pages/homepage/homepage';
import Cartpage from '../components/pages/cartpage/cartpage';

const App = () => {   
    return (
        <div>
            <Switch>
                <Route exact path = '/' component = {Homepage}/>
                <Route path = '/cart' component = {Cartpage}/>
            </Switch>
        </div>
    )
}

export default App
