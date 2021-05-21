import { createSlice } from '@reduxjs/toolkit';

export const categoriesReducer = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    addNewCategory: (state, action) => {
      state.push(action.payload);
    },
    fetchAllCategories: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { addNewCategory, fetchAllCategories } = categoriesReducer.actions;

export default categoriesReducer.reducer;
