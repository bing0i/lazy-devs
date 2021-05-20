import { createSlice } from '@reduxjs/toolkit';

export const postsReducer = createSlice({
  name: 'posts',
  initialState: {},
  reducers: {
    addNewPost: (state, action) => {
      const { category, title, description, content } = action.payload;
      const post = { title, description, content };

      if (state.hasOwnProperty(category)) {
        state[category].push(post);
      } else {
        state[category] = [post];
      }
    },
  },
});

export const { addNewPost } = postsReducer.actions;

export default postsReducer.reducer;
