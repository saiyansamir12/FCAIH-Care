import { createSlice } from '@reduxjs/toolkit';
import { fetchProductCategorys, addCategory } from '../actions/CategoryActions';

const initialState = {
  productCategorys: [],
  loading: 'idle',
  error: null
};

export const productCategorySlice = createSlice({
  name: 'productCategorys',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductCategorys.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchProductCategorys.fulfilled, (state, action) => {
        const { productId, productCategorys } = action.payload;
        if (productId === state.productId) {
          state.loading = 'idle';
          state.productCategorys = productCategorys;
        }
      })
      .addCase(fetchProductCategorys.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      })
  }
});

export const {  } = productCategorySlice.actions;

export default productCategorySlice.reducer;
