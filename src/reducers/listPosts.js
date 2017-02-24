import { createActions, createReducer } from 'reduxsauce';
import immutable from 'seamless-immutable';
export var dbListPosts = {};

/* ------------- Types and Action Creators ------------- */

/**
 *define all Creators and Types
 *....name acction map to constaint Type string
 */
const {
  Types,
  Creators,
} = createActions({
  listPostsRequest: ['id'],
  listPostsSuccess: ['listPosts'],
  listPostsFailure: ['error'],
});

export const ListPostsType = Types;
export default Creators;

export const INITIAL_STATE = immutable({
  error: null,
  listPosts: {},
  fetching: false,
  type: '',
});

export const request = (state, { type }) => state.merge({
  fetching: true,
  type,
});

export const success = (state, { listPosts, type }) => {
  dbListPosts = listPosts;
  return state.merge({
    fetching: false,
    listPosts,
    error: null,
    type,
  });
};

export const failure = (state, { error, type }) =>
  state.merge({
    fetching: false,
    error,
    type,
  });

/** -------------export types constaint------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LIST_POSTS_REQUEST]: request,
  [Types.LIST_POSTS_SUCCESS]: success,
  [Types.LIST_POSTS_FAILURE]: failure,
});
