import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import categoriesReducer from './slices/categoriesSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/postsSaga';

const reducer = {
  posts: postsReducer,
  categories: categoriesReducer,
};

const preloadedState = {
  categories: ['data-structures', 'sorting-algorithms', 'searching-algorithms'],
  posts: [],
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer,
  preloadedState,
  middleware,
});

sagaMiddleware.run(rootSaga);
// const action = (type) => store.dispatch({ type });

export default store;
