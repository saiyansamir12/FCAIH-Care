import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchOrdersByUserId, deleteOrder } from '../../store/actions/orderActions';
import orderItemApi from '../../utils/api/orderItemApi';
import CategoryApi from '../../utils/api/CategoryApi';
import productApi from '../../utils/api/productApi';
import { useStatusString, formatPrice, formatDateTime } from '../../utils/hooks/useUtil';

function MyOrders({ currentUser }) {
  const [orders, setOrders] = useState([]);
  const getStatusString = useStatusString();
    const dispatch = useDispatch();

const handleCancel = (orderId) => {
    dispatch(deleteOrder(orderId));
};

  useEffect(() => {
    dispatch(fetchOrdersByUserId(currentUser.userID)).then(async (response) => {
      const ordersWithItems = await Promise.all(response.payload.map(async (order, index) => {
        const orderItems = await orderItemApi.getOrderItemsByOrderId(order.orderID);

        const productSizePromises = orderItems.map((orderItem) =>
          CategoryApi.getProductCategory(orderItem.productCategoryID)
        );
        const productCategorys = await Promise.all(productSizePromises);

          const productPromises = productCategorys.map((productCategory) =>
              productApi.getProduct(productCategorys.productID)
        );
        const products = await Promise.all(productPromises);

        return {
          ...order,
          orderItems: orderItems.map((orderItem, index) => ({
            ...orderItem,
              productSize: productCategorys[index],
            product: products[index]
          })),
          index
        };
      }));
      setOrders(ordersWithItems);
    });
  }, [dispatch, currentUser.userID]);

  return (
    <>
      <h1>My Orders</h1>
      {orders.map((order) => (
        <div className='my-orders-div' key={order.orderID}>
          <div className="line"></div>
          <div className='my-orders-about space-between'>
            <ul>
              <li><p className='grey txt'>Order #{order.orderID}</p></li>
              <li><p>Placed {formatDateTime(order.dateTime)}</p></li>
            </ul>
                  <ul>
                      {order.status === 0 && <li><a className='red txt' onClick={() => handleCancel(order.orderID)}>Cancel</a></li>}
                      <li>
                {getStatusString(order.status)}
              </li>
            </ul>
          </div>
          <div>
            {order.orderItems.map((orderItem) => (
              <div key={orderItem.orderItemID}>
                <div className="cart-item" key={orderItem.orderItemID}>
                  <div className="cart-item-img">
                    <img src={orderItem.product.imageURL}></img>
                  </div>
                  <div className="cart-item-about">
                    <div className="cart-item-details">
                      <p>{orderItem.product.name}</p>
                                <p>Category: {orderItem.productCategory.cataegory}</p>
                      <p>Quantity: {orderItem.quantity}</p>
                      <p>Price: {formatPrice(orderItem.productSize.price)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default MyOrders;
