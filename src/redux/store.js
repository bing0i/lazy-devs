import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import postsReducer from './slices/postsSlice';
import categoriesReducer from './slices/categoriesSlice';
import errorsReducer from './slices/errorsSlice';
import isloginReducer from './slices/loginSlice';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';

const reducer = {
  posts: postsReducer,
  categories: categoriesReducer,
  errors: errorsReducer,
  login: isloginReducer,
};

const preloadedState = {
  categories: [],
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

store.dispatch({ type: 'getAllCategories' });
store.dispatch({ type: 'getAllPosts' });

export default store;
