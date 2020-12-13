import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import setAuthToken from '../utilities/setAuthToken';

import '../styles/Board.css'

import Board from './board/Board';
import Navbar from './layout/Navbar';
import Login from './auth/Login';
import Register from './auth/Register';

import { store } from '../index';
import { loadUser } from '../actions/auth';


if (localStorage.token) {
    setAuthToken(localStorage.token);
}

class App extends React.Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <React.Fragment>
                <Router history={history}>
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact component={Board}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;