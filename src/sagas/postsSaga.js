import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { addNewPost } from '../redux/slices/postsSlice';

function apiPostPost(post) {
  return axios.request({
    method: 'post',
    url: 'http://localhost:5000/api/posts',
    data: post,
  });
}

function* postPost(action) {
  // TODO: handle error
  const post = yield call(apiPostPost, action.payload);
  yield put(addNewPost(post.data));
}

function* watchPostPost() {
  yield takeEvery('postPost', postPost);
}

const postsSagas = [watchPostPost];

export default postsSagas;
