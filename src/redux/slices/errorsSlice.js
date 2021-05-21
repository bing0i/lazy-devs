import { createSlice } from '@reduxjs/toolkit';

export const errorsReducer = createSlice({
  name: 'errors',
  initialState: [],
  reducers: {
    reportError: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { reportError } = errorsReducer.actions;

export default errorsReducer.reducer;
