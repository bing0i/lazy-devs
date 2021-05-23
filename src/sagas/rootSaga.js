import categoriesSagas from './categoriesSaga';
import postsSagas from './postsSaga';
import loginSaga from './loginSaga';
import { all } from 'redux-saga/effects';

const sagas = [].concat(categoriesSagas, postsSagas, loginSaga);

export default function* rootSaga() {
  yield all(sagas.map((saga) => saga()));
}
