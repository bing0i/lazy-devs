import ACTION from '../assets/sagaConstants';

export const getAllCategories = payload => ({
  type: ACTION.GET_ALL_CATEGORIES,
  payload,
});

export const getAllPosts = payload => ({
  type: ACTION.GET_ALL_POSTS,
  payload,
});

export const pushPost = payload => ({
  type: ACTION.PUSH_POST,
  payload,
});

export const login = payload => ({
  type: ACTION.LOGIN,
  payload,
});

export const logout = payload => ({
  type: ACTION.LOGOUT,
  payload,
});
