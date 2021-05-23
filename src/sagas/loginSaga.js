import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { login, logout } from '../redux/slices/loginSlice';
import { reportError } from '../redux/slices/errorsSlice';

function apiPostLogin(user) {
  return axios.request({
    method: 'post',
    url: 'http://localhost:5000/users/login',
    data: user,
  });
}

function apiPostLogout() {
  return axios.request({
    method: 'get',
    url: 'http://localhost:5000/users/logout',
  });
}

function* postLogin(action) {
  try {
    const isSuccess = yield call(apiPostLogin, action.payload);
    if (isSuccess.data) {
      yield put(login(true));
    }
  } catch (e) {
    yield put(reportError({ message: e.message }));
  }
}

function* postLogout(action) {
  try {
    const isSuccess = yield call(apiPostLogout);
    if (isSuccess.data) {
      yield put(logout(false));
    }
  } catch (e) {
    yield put(reportError({ message: e.message }));
  }
}

function* watchPostLogin() {
  yield takeEvery('login', postLogin);
}

function* watchPostLogout() {
  yield takeEvery('logout', postLogout);
}

const loginSagas = [watchPostLogin, watchPostLogout];

export default loginSagas;
