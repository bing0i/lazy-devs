import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { login, logout } from '../redux/slices/loginSlice';
import { reportError } from '../redux/slices/errorsSlice';
import { LOGIN, LOGOUT } from '../assets/sagaConstants';
import { URL_LOGIN, URL_LOGOUT } from '../assets/apiConstants';

function apiPostLogin(user) {
  return axios.request({
    method: 'post',
    url: URL_LOGIN,
    data: user,
  });
}

function apiPostLogout() {
  return axios.request({
    method: 'get',
    url: URL_LOGOUT,
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

function* postLogout() {
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
  yield takeEvery(LOGIN, postLogin);
}

function* watchPostLogout() {
  yield takeEvery(LOGOUT, postLogout);
}

const loginSagas = [watchPostLogin, watchPostLogout];

export default loginSagas;
