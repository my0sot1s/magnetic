
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from './reducers';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import RouteConfig from './RouteConfig';

const middleware = applyMiddleware(thunkMiddleware, logger());
const store = createStore(combineReducers, middleware);
/**
 *Create App class
 */
export default class RootContainers extends React.Component {
    /**
     *Render View
     */
    render() {
        return (
            <Provider store={store}>
                <div>
                    <RouteConfig />
                </div>
            </Provider>
        );
    }
}
