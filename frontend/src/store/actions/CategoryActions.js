import CategoryApi from '../../utils/api/CategoryApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductCategorys = createAsyncThunk( 'ProductCategorys/fetchProductCategorys', async () => {
    const ProductCategorys = await CategoryApi.getProductCategorys();
    return ProductCategorys;
    }
  );
  
  export const fetchProductCategorysByProductId = createAsyncThunk( 'ProductCategorys/fetchProductCategorys', async (productId) => {
      const ProductCategorys = await CategoryApi.getProductCategorysByProductId(productId);
      return { productId, ProductCategorys };
    }
  );
  
  export const addCategory = createAsyncThunk('ProductCategorys/addCategory', async ({ category, price, quantity, productId }) => {
      const newCategory = { category, price, quantity, productId };
      const createdProductCategory = await CategoryApi.addProductCategory(newCategory);
      return createdProductCategory;
    }
  );
  
  export const updateCategory = createAsyncThunk(
    'products/updateExistingCategory',
    async ({ CategoryId, Category }) => {
      try {
        const updatedCategory = await CategoryApi.updateProductCategory(CategoryId, Category);
        return updatedCategory;
      } catch (error) {
        console.error('Error updating Category: ', error);
        throw error;
      }
    }
  );
  
  export const deleteCategory = createAsyncThunk('products/deleteCategory', async (ProductCategoryId) => {
    const deletedCategory = await CategoryApi.deleteProductCategory(ProductCategoryId);
    return deletedCategory;
  });