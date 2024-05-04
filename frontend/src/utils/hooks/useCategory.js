import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, addCategory, updateCategory, fetchCategorys } from '../../store/actions/CategoryActions';

export const useCategory = () => {
    const dispatch = useDispatch();
    const categorys = useSelector(state => state.categorys.categorys);

    const fetchCategorysHandler = () => {
        dispatch(fetchCategorys());
  }

  const addCategoryHandler = ({ Category, productId }, e) => {
    dispatch(addCategory({ Category, productId }))
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
      fetchCategorys: fetchCategorysHandler,
      categorys
  };
};



