import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { addNewPost, fetchAllPosts } from '../redux/slices/postsSlice';
import { reportError } from '../redux/slices/errorsSlice';
import { URL_POSTS } from '../assets/apiConstants';
import { GET_ALL_POSTS, PUSH_POST } from '../assets/sagaConstants';

function apiPostPost(post) {
  return axios.request({
    method: 'post',
    url: URL_POSTS,
    data: post,
  });
}

function* pushPost(action) {
  try {
    const post = yield call(apiPostPost, action.payload);
    yield put(addNewPost(post.data));
  } catch (e) {
    yield put(reportError({ message: e.message }));
  }
}

function* watchPushPost() {
  yield takeEvery(PUSH_POST, pushPost);
}

function apiGetAllPosts() {
  return axios.request({
    method: 'get',
    url: URL_POSTS,
  });
}

function* getAllPosts() {
  try {
    const posts = yield call(apiGetAllPosts);
    yield put(fetchAllPosts(posts.data));
  } catch (e) {
    yield put(reportError({ message: e.message }));
  }
}

function* watchGetAllPosts() {
  yield takeEvery(GET_ALL_POSTS, getAllPosts);
}

const postsSagas = [watchPushPost, watchGetAllPosts];

export default postsSagas;
