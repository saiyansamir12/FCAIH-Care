import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice1 = createSlice({
  name: 'wishlist',
  initialState: {
    items: localStorage.getItem('wishlist')
      ? JSON.parse(sessionStorage.getItem('wishlist'))
      : [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      const itemIndex = state.items.findIndex((item) => item.productID === product.productID);
      if (itemIndex === -1) {
        state.items.push(product);
      }
      sessionStorage.setItem('wishlist', JSON.stringify(state.items));
    },
    removeFromWishlist: (state, action) => {
      const product = action.payload;
      state.items = state.items.filter((item) => item.productID !== product.productID);
      sessionStorage.setItem('wishlist', JSON.stringify(state.items));
    },
    clearWishlist: (state) => {
      state.items = [];
      sessionStorage.removeItem('wishlist');
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice1.actions;

export default wishlistSlice1.reducer;
