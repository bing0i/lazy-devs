import { createSlice } from '@reduxjs/toolkit';

export const postsReducer = createSlice({
  name: 'posts',
  initialState: {
    categories: {},
  },
  reducers: {
    addNewPost: (state, action) => {
      const { category, title, description, content } = action.payload;
      const post = { title, description, content };

      if (state.categories.hasOwnProperty(category)) {
        state.categories[category].push(post);
      } else {
        state.categories[category] = [post];
      }
    },
  },
});

export const { addNewPost } = postsReducer.actions;

export default postsReducer.reducer;
