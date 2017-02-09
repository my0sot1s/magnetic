
import React from 'react';
import {
    Route, //eslint-disable-line
    Router, //eslint-disable-line
    IndexRoute, //eslint-disable-line
    browserHistory,
    Redirect,//eslint-disable-line
} from 'react-router';

import Home from './components/Home';
import Album from './components/Album';
import Author from './components/Author';
import Index from './components/Index';



export default class RouteConfig extends React.Component {
    /**
     *Render View
     */
    render() {
        return (
            <Router history={browserHistory} >
                <Route path='/' component={Index}>
                    <Route path='/album' component={Album} />
                    <Route path='/home' component={Home} />
                    /**this child of contact */
                    <Route path='/album/author/:id' component={Author} />

                </Route>
            </Router>
        );
    }
}
