import { createSlice } from '@reduxjs/toolkit';

export const isloginReducer = createSlice({
  name: 'isLogin',
  initialState: false,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    logout: (state, action) => {
      return action.payload;
    },
  },
});

export const { login, logout } = isloginReducer.actions;

export default isloginReducer.reducer;
