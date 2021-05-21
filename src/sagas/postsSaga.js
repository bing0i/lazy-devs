import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { addNewPost, fetchAllPosts } from '../redux/slices/postsSlice';

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

function apiGetAllPosts() {
  return axios.request({
    method: 'get',
    url: 'http://localhost:5000/api/posts',
  });
}

function* getAllPosts(action) {
  // TODO: handle error
  const posts = yield call(apiGetAllPosts);
  yield put(fetchAllPosts(posts.data));
}

function* watchGetAllPosts() {
  yield takeEvery('getAllPosts', getAllPosts);
}

const postsSagas = [watchPostPost, watchGetAllPosts];

export default postsSagas;
