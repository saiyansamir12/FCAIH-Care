import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCategory, addCategory, updateCategory } from '../../store/actions/CategoryActions';

export const useCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);

  const addCategoryHandler = ({ Category, price, quantity, productId }, e) => {
    dispatch(addCategory({ Category, price, quantity, productId }))
  };

  const updateCategoryHandler = ({ CategoryId, Category }) => {
    dispatch(updateCategory({ CategoryId, Category }));   
  }; 

  const deleteCategoryHandler = (CategoryId, e) => {
    e.preventDefault();
    console.log("Categoryhook", CategoryId )
    if (window.confirm("Are you sure you want to delete this Category?")) {
      dispatch(deleteCategory(CategoryId)).then(() => {
        alert("Category has been deleted.");
      });
    }  
  };

  return { 
    addCategory: addCategoryHandler,
    updateCategory: updateCategoryHandler,
    deleteCategory: deleteCategoryHandler, 
  };
};



