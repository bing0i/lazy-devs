import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  // addNewCategory,
  fetchAllCategories,
} from '../redux/slices/categoriesSlice';
import { reportError } from '../redux/slices/errorsSlice';
import { GET_ALL_CATEGORIES } from '../assets/sagaConstants';
import { URL_CATEGORIES } from '../assets/apiConstants';

function apiGetAllCategories() {
  return axios.request({
    method: 'get',
    url: URL_CATEGORIES,
  });
}

function* getAllCategories() {
  try {
    const categories = yield call(apiGetAllCategories);
    yield put(fetchAllCategories(categories.data));
  } catch (e) {
    yield put(reportError({ message: e.message }));
  }
}

function* watchGetAllCategories() {
  yield takeEvery(GET_ALL_CATEGORIES, getAllCategories);
}

const categoriesSagas = [watchGetAllCategories];

export default categoriesSagas;
