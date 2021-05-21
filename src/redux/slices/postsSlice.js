import { createSlice } from '@reduxjs/toolkit';

export const postsReducer = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addNewPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addNewPost } = postsReducer.actions;

export default postsReducer.reducer;
