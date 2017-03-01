import { combineReducers } from 'redux';

/** -------------custome reducer------------- */
import { reducer as listPostsReducer } from './listPosts';

import { reducer as postDetailReducer } from './postDetail';

/** -------------Combine reducers------------ */

const rootReducers = combineReducers({
  listPostsReducer,

  postDetailReducer,
});

export default rootReducers;

