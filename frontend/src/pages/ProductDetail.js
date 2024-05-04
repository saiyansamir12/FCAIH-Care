  import React, { useState, useEffect } from 'react';

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { icons } from '../assets/icons/icons';

  import { useParams } from 'react-router-dom';
  import { useCart } from "../utils/hooks/useCart";
  import { useProduct } from '../utils/hooks/useProduct';
  import { useWishlist } from '../utils/hooks/useWishlist';
  import { formatPrice } from '../utils/hooks/useUtil';

  function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
      const { products, fetchProducts } = useProduct();
    console.log(products);
    const { wishlistItems, toggleWishlistItem } = useWishlist();
    const product = products.find((product) => product?.productID === Number(id));
    const itemExists = wishlistItems.find((item) => item?.productID === product?.productID);

    useEffect(() => {
      fetchProducts();
    }, []);

   
    return (
      <>
        {product && (
          <div className='flex container'>
            <div className='product-detail-img flex-2'>
              <img src={product.imageURL} alt="" />
            </div>
            <div className='product-detail-about flex-1'>
              <h1>{product.name}</h1>
              <p>{formatPrice(product.price)}</p>   
            <div className='divider'>
                            <button onClick={() => addToCart({ product: product, price: product.Price })}>ADD TO BASKET</button>
                            <button className='second-button' onClick={() => toggleWishlistItem(product)}>
                <span>WISHLIST</span><FontAwesomeIcon icon={itemExists ? icons.heartFull : icons.heart}/>
              </button>
            </div>  
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
