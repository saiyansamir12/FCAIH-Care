import { createSlice } from '@reduxjs/toolkit';
import { fetchCategorys } from '../actions/CategoryActions';

const initialState = {
    categorys: [],
    status: 'idle',
  loading: 'idle',
  error: null
};

export const CategorySlice = createSlice({
  name: 'categorys',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchCategorys.pending, (state) => {
        state.loading = 'pending';
      })
        .addCase(fetchCategorys.fulfilled, (state, action) => {
            state.loading = 'idle';
            state.categorys = action.payload;
        })
        .addCase(fetchCategorys.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      })
  }
});

export const {  } = CategorySlice.actions;

export default CategorySlice.reducer;
