import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './../reducers';
import sagas from './../sagas';
import createLogger from 'redux-logger';


const configStore = (initialState) => {
  const logger = createLogger();
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(sagas);
  return store;
};

export default configStore;
