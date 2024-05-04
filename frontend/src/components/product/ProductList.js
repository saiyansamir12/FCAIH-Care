import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductItem';
import { useProduct } from '../../utils/hooks/useProduct';
import {categorys, useCategory} from '../../utils/hooks/useCategory';
import { useSelector } from 'react-redux';
import { icons } from '../../assets/icons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useToggle  from "../../utils/hooks/useUtil"

function ProductList() {
  const { toggle, isToggled } = useToggle();
  const { products, fetchProducts } = useProduct();
  const { categorys, fetchCategorys } = useCategory();
    const { productCategoryID } = useParams();
    const [category, setCategory] = useState(productCategoryID || '');

  const [sortOrder, setSortOrder] = useState('asc');
    useEffect(() => {
        fetchProducts();
        fetchCategorys();
    }, [])

    const filteredProducts = products.filter((product) => {
        const categoryFilter = category === '' || product.productCategoryID === parseInt(category);
        return categoryFilter;
    }).sort((a, b) => {
        if (sortOrder === 'lowToHigh') {
            if (isNaN(a.defaultPrice)) return 1;
            if (isNaN(b.defaultPrice)) return -1;
            return a.defaultPrice - b.defaultPrice;
        } else if (sortOrder === 'highToLow') {
            if (isNaN(a.defaultPrice)) return -1;
            if (isNaN(b.defaultPrice)) return 1;
            return b.defaultPrice - a.defaultPrice;
        } else {
            return 0;
        }
    });
    useEffect(() => {
        console.log('Category:', categorys);
    }, [categorys]);

    useEffect(() => {
        console.log('Filtered products:', filteredProducts);
    }, [filteredProducts]);

  return (
    <div className='shop'>
      <div className='filter-control'>
        <div className='filter-div toggle'>
          <a onClick={() => toggle()}><FontAwesomeIcon icon={icons.filter}/></a>
        </div>  
        { isToggled() && 
        <div className='filter-option'>
          <div className="filter-div">
                          <label htmlFor="category">Categories:</label>
                          <select id="category" name="category" value={category} onChange={(event) => {
                              console.log('Selected category:', event.target.value);
                              setCategory(event.target.value);
                          }}>
                              <option value="">All</option>
                              {Array.isArray(categorys) && categorys.map((cat, index) => (
                                  <option key={index} value={cat.productCategoryID}>{cat.category}</option>
                              ))}
                          </select>
        </div>
                      <div className="filter-div filter-spec">
                      </div>
        <div className="filter-div">
          <label>Sort by:</label>
            <select id="sort" name="sort" value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
              <option value="">Newest</option>
              <option value="lowToHigh">Lowest to Highest</option>
              <option value="highToLow">Highest to Lowest</option>
            </select>
        </div>
      </div>
        }
      </div>
          <div className="product-grid">
              {filteredProducts.reverse().map((product, index) => <ProductCard product={product} key={index} />)}
          </div>
    </div>
  );
}

export default ProductList 