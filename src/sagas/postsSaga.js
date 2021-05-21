import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { addNewPost, fetchAllPosts } from '../redux/slices/postsSlice';
import { reportError } from '../redux/slices/errorsSlice';

function apiPostPost(post) {
  return axios.request({
    method: 'post',
    url: 'http://localhost:5000/api/posts',
    data: post,
  });
}

function* postPost(action) {
  try {
    const post = yield call(apiPostPost, action.payload);
    yield put(addNewPost(post.data));
  } catch (e) {
    yield put(reportError({ message: e.message }));
  }
}

function* watchPostPost() {
  yield takeEvery('postPost', postPost);
}

function apiGetAllPosts() {
  return axios.request({
    method: 'get',
    url: 'http://localhost:5000/api/posts',
  });
}

function* getAllPosts(action) {
  try {
    const posts = yield call(apiGetAllPosts);
    yield put(fetchAllPosts(posts.data));
  } catch (e) {
    yield put(reportError({ message: e.message }));
  }
}

function* watchGetAllPosts() {
  yield takeEvery('getAllPosts', getAllPosts);
}

const postsSagas = [watchPostPost, watchGetAllPosts];

export default postsSagas;
