import React, { useState, useEffect } from 'react';
import orderItemApi from '../../utils/api/orderItemApi';
import categoryApi from '../../utils/api/CategoryApi';
import { Link } from 'react-router-dom';
import { useProduct } from "../../utils/hooks/useProduct"
import { formatPrice } from '../../utils/hooks/useUtil';


function OrderItemsTable({ selectedOrder }) {
  const [orderItems, setOrderItems] = useState([]);
    const [ProductCategorys, setProductCategorys] = useState([]);
  const { products }= useProduct();

  useEffect(() => {
    if (selectedOrder) {
      orderItemApi.getOrderItemsByOrderId(selectedOrder.orderID).then((orderItems) => {
        setOrderItems(orderItems);

          const ProductCategoryPromises = orderItems.map((orderItem) =>
            categoryApi.getProductCategory(orderItem.productCategoryID)
        );
          Promise.all(ProductCategoryPromises).then((ProductCategorys) => {
              setProductCategorys(ProductCategorys);
        });
        
      });
    }
  }, [selectedOrder]);

  return (
    <div className='order-items'>
      {orderItems.map((orderItem, index) => (
        <div key={index} className='cart-item'>
          {products[index] && (
            <div className="cart-item-img">
              <Link to={`/${products[index].productID}`}><img src={products[index].imageURL} /></Link>
            </div>
          )}
          <div className="cart-item-about">
            <div className='cart-item-details'>
              {products[index] && (
                <Link to={`/${products[index].productID}`}><p>{products[index].brand} {products[index].name}</p></Link>
              )}
                      {ProductCategorys[index] && (
                          <p>Category: {ProductCategorys[index].category}</p>
              )}
              <p>Quantity: {orderItem.quantity}</p>
            </div>
                  {ProductCategorys[index] && (
              <div className="cart-item-price">
                          <p>{formatPrice(ProductCategorys[index].price)}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}  
  

export default OrderItemsTable;
