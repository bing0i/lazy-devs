import { createSlice } from '@reduxjs/toolkit';

export const isloginReducer = createSlice({
  name: 'isLogin',
  initialState: false,
  reducers: {
    login: (state) => {
      state = true;
    },
    logout: (state) => {
      state = false;
    },
  },
});

export const { login, logout } = isloginReducer.actions;

export default isloginReducer.reducer;
