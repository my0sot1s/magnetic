import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import albumReducer from './albumReducers';

export default combineReducers({
  users: usersReducer,
  album: albumReducer,
});
