import 'babel-polyfill';
import React from 'react';
import {
    Route, //eslint-disable-line
    Router, //eslint-disable-line
    IndexRoute, //eslint-disable-line
    browserHistory,
    hashHistory,
    Redirect,//eslint-disable-line
} from 'react-router';
import configStore from './../src/store';//eslint-disable-line
import { Provider } from 'react-redux';

const store = configStore();

import Home from './components/Home';
// import Album from './components/Album';
import PostDetail from './components/PostDetail';
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
            <Provider store={store}>
                <Router history={browserHistory} >
                    <Route path='/' component={Index}>
                        <Route path='/home' component={Home} />
                        /**this child of contact */
                        <Route path='/post/:title/:id' component={PostDetail} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}
