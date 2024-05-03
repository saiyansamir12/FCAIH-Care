
import { createAsyncThunk } from '@reduxjs/toolkit';
import productApi from '../../utils/api/productApi';
import categoryApi from '../../utils/api/CategoryApi';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const products = await productApi.getProducts();
      const productCategorys = await categoryApi.getProductCategorys();
      const ProductCategoriesMap = productCategorys.reduce((map, Category) => {
      if (!map[Category.productID]) {
        map[Category.productID] = [];
      }
      map[Category.productID].push(Category);
      return map;
    }, {});
    const productsWithCategorys = products.map(product => {
      const { productID } = product;
        const categories = ProductCategoriesMap[productID] || [];
        const minPrice = Math.min(...categories.map(({ price }) => price));
        const inStock = categories.length > 0;
        return { ...product, categories, defaultPrice: minPrice, inStock };
    });
    return productsWithCategorys;
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