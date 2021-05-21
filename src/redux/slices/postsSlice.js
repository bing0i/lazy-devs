import { createSlice } from '@reduxjs/toolkit';

export const postsReducer = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addNewPost: (state, action) => {
      state.push(action.payload);
    },
    fetchAllPosts: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { addNewPost, fetchAllPosts } = postsReducer.actions;

export default postsReducer.reducer;
