import { call, put } from 'redux-saga/effects';

/** -----------------Import reducer--------------------- */

import Action from './../reducers/listPosts';

import config from './../constaints';

/** ---------------Read data------------------ */
export function* sagaListPosts(action) {
  try {
    var url = config.url.concat(action.id);
    const list = yield call(fetch, url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    var data = yield list.json();

    yield put(Action.listPostsSuccess(data));
  } catch (error) {
    yield put(Action.listPostsFailure(error));
  }
}
