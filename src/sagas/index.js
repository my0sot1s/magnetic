import { takeLatest } from 'redux-saga';

/** --------------------saga define---------------------- */
import { sagaListPosts } from './listPosts';

import { sagaPostDetail } from './postDetail';

/** ----------------reducer action type --------------------- */

import { ListPostsType } from './../reducers/listPosts';

import { PostDetailType } from './../reducers/postDetail';


/** ----------------- root saga define ----------------------- */

export default function* rootSaga() {
  yield [
    takeLatest(ListPostsType.LIST_POSTS_REQUEST, sagaListPosts),

    takeLatest(PostDetailType.POST_DETAIL_REQUEST, sagaPostDetail),
  ];
}

