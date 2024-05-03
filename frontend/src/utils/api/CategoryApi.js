import axios from 'axios';
import { variables } from './variables.js';

const API_URL = variables.PRODUCTCATEGORY_API

const getProductCategories = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

const getProductCategory = async (productCategoryId) => {
    const response = await axios.get(`${API_URL}/${productCategoryId}`);
    return response.data;
}

const addProductCategory = async (productCategory) => {
    const response = await axios.post(API_URL, productCategory);
    return response.data;
}

const updateProductCategory = async (productCategoryId, productCategory) => {
    const response = await axios.put(`${API_URL}/${productCategoryId}`, productCategory);
    return response.data;
}

const deleteProductCategory = async (productCategoryId) => {
    const response = await axios.delete(`${API_URL}/${productCategoryId}`);
    return response.data;
}


export default {
    getProductCategories,
    getProductCategory,
    addProductCategory,
    updateProductCategory,
    deleteProductCategory
};