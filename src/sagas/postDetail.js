import { call, put } from 'redux-saga/effects';

/** -----------------Import reducer--------------------- */

import Action from './../reducers/postDetail';

import config from './../constaints';

/** ---------------Read data------------------ */
export function* sagaPostDetail(action) {
  try {
    var url = config.url + action.id + '/id/' + action.postId;
    console.log(url);
    const list = yield call(fetch, url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    var data = yield list.json();

    yield put(Action.postDetailSuccess(data));
  } catch (error) {
    yield put(Action.postDetailFailure(error));
  }
}
