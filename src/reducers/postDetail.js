// @flow

import { createActions, createReducer } from 'reduxsauce';
import immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

/**
 *define all Creators and Types
 *....name acction map to constaint Type string
 */
const {
  Types,
  Creators,
} = createActions({
  postDetailRequest: ['id', 'postId'],
  postDetailSuccess: ['postDetail'],
  postDetailFailure: ['error'],
});

export const PostDetailType = Types;
export default Creators;

export const INITIAL_STATE = immutable({
  error: null,
  postDetail: {},
  fetching: false,
  type: '',
});

export const request = (state, { type }) => state.merge({
  fetching: true,
  type,
});

export const success = (state, { postDetail, type }) => state.merge({
  fetching: false,
  postDetail,
  error: null,
  type,
});

export const failure = (state, { error, type }) =>
  state.merge({
    fetching: false,
    error,
    type,
  });
/** -------------export types constaint------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.POST_DETAIL_REQUEST]: request,
  [Types.POST_DETAIL_SUCCESS]: success,
  [Types.POST_DETAIL_FAILURE]: failure,
});
