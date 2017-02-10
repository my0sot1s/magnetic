
import React from 'react';
import {
    Route, //eslint-disable-line
    Router, //eslint-disable-line
    IndexRoute, //eslint-disable-line
    browserHistory,
    hashHistory,
    Redirect,//eslint-disable-line
} from 'react-router';

import Home from './components/Home';
// import Album from './components/Album';
import Author from './components/Author';
import Index from './components/Index';
/**
 *render Router config
 */
export default class RouteConfig extends React.Component {
    /**
     *Render View
     <Route path='/author' component={Author} />
     */
    render() {
        return (
            <Router history={hashHistory} >
                <Route path='/' component={Index}>
                    <Route path='/home' component={Home} />
                    /**this child of contact */
                    <Route path='/author/:id' component={Author} />
                </Route>
            </Router>
        );
    }
}
