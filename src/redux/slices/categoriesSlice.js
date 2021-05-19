import { createSlice } from '@reduxjs/toolkit';

export const categoriesReducer = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    addNewCategory: (state, action) => {
      state.push(action.payload.category);
    },
  },
});

export const { addNewCategory } = categoriesReducer.actions;

export default categoriesReducer.reducer;
