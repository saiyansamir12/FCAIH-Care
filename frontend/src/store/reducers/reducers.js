import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import categoryReducer from './categorySlice';
import userReducer from "./userSlice"
import wishlistReducer from "./wishlistSlice"

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  categorys: categoryReducer,
  user: userReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;