import categoriesSagas from './categoriesSaga';
import postsSagas from './postsSaga';
import { all } from 'redux-saga/effects';

const sagas = [].concat(categoriesSagas, postsSagas);

export default function* rootSaga() {
  yield all(sagas.map((saga) => saga()));
}
