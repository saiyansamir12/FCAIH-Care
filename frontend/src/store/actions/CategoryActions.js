import CategoryApi from '../../utils/api/CategoryApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategorys = createAsyncThunk( 'ProductCategorys/fetchCategorys', async () => {
    const ProductCategorys = await CategoryApi.getCategorys();
    return ProductCategorys;
    }
  );
  
  export const fetchProductCategorysByProductId = createAsyncThunk( 'ProductCategorys/fetchProductCategorys', async (productId) => {
      const ProductCategorys = await CategoryApi.getProductCategorysByProductId(productId);
      return { productId, ProductCategorys };
    }
  );
  
  export const addCategory = createAsyncThunk('ProductCategorys/addCategory', async ({ category }) => {
      const newCategory = { category };
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