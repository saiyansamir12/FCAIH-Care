
import { createAsyncThunk } from '@reduxjs/toolkit';
import productApi from '../../utils/api/productApi';
import categoryApi from '../../utils/api/CategoryApi';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const products = await productApi.getProducts();
            const productCategories = await categoryApi.getProductCategorys();
            const productCategoriesMap = productCategories.reduce((map, category) => {
                if (!map[category.ProductID]) {
                    map[category.ProductID] = [];
                }
                map[category.ProductID].push(category);
                return map;
            }, {});
            const productsWithCategories = products.map(product => {
                const { ProductID } = product;
                const categories = productCategoriesMap[ProductID] || [];
                const minPrice = Math.min(...categories.map(({ Price }) => Price));
                const inStock = categories.length > 0;
                return { ...product, categories, defaultPrice: minPrice, inStock };
            });
            return productsWithCategories;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


  export const fetchProductById = createAsyncThunk('products/fetchProductById', async (productId) => {
    const product = await productApi.getProduct(productId);
    return product;
  });
  
  export const createProduct = createAsyncThunk('products/createProduct', async (product) => {
    const createdProduct = await productApi.addProduct(product);
    return createdProduct;
  });
  
  export const updateExistingProduct = createAsyncThunk(
    'products/updateExistingProduct',
    async ({ productId, product }) => {
      const updatedProduct = await productApi.updateProduct(productId, product);
      return updatedProduct;
    }
  );
  
  export const removeProduct = createAsyncThunk('products/removeProduct', async (productId) => {
    const deletedProduct = await productApi.deleteProduct(productId);
    return deletedProduct;
  });