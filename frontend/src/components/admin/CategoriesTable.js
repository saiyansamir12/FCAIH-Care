import React, { useState } from 'react';
import { icons } from '../../assets/icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCategory } from '../../utils/hooks/useCategory';

function ProductCategorys({ product }) {
  const { addCategory, updateCategory, deleteCategory } = useCategory();
  const [newCategory, setNewCategory] = useState({ Category: '', price: '', quantity: '' });
  const [editedCategory, setEditedCategory] = useState({}); 
  
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCategory = { ...product.Categorys[index], [name]: value };
    setEditedCategory(updatedCategory);
  };    
  
  return (
    <>
      <table className='Category-table'>
        <thead>
          <tr>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <select id="Category" value={newCategory.Category} onChange={(e) => setNewCategory({ ...newCategory, Category: e.target.value })}>
                <option disabled value="">Select Category</option>
                {Array.from({ length: 16 }, (_, i) => i + 35)
                  .filter((Category) => !product?.Categorys.find((ps) => ps.Category === Category))
                  .map((Category, index) => (
                    <option key={index} value={Category}>
                      {Category}
                    </option>
                  ))}
              </select>
            </td>
            <td>
              <input id="price" type="number" value={newCategory.price} onChange={(e) =>
                setNewCategory((prevCategory) => ({
                  ...prevCategory,
                  price: e.target.value,
                }))
              }/>
            </td>
            <td>
              <input id="quantity" type="number" value={newCategory.quantity} onChange={(e) =>
                setNewCategory((prevCategory) => ({
                  ...prevCategory,
                  quantity: e.target.value,
                }))
              }/>
            </td>
            <td>
              <button onClick={() => addCategory({ ...newCategory, productId: product.productID })}>ADD</button>
            </td>
          </tr>
          {product?.Categorys.map((Category, index) => (
            <tr key={index}>
              <td>{Category.Category}</td>
              <td>
              <input
                  name="price"
                  type="number"
                  value={editedCategory?.price ?? Category?.price}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </td>
              <td>
              <input
                  name="quantity"
                  type="number"
                  value={editedCategory?.quantity ?? Category?.quantity}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </td>
              <td>
                <button onClick={(e) => deleteCategory(Category.productCategoryID, e)}>
                  <FontAwesomeIcon icon={icons.trash}></FontAwesomeIcon>
                </button>
                <button onClick={() => updateCategory({ CategoryId: Category.productCategoryID, Category: editedCategory})}>
                  <FontAwesomeIcon icon={icons.save}></FontAwesomeIcon>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductCategorys;
