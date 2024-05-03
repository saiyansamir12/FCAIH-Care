import React, {useEffect} from 'react'
import { useCart } from "../../utils/hooks/useCart"
import orderApi from "../../utils/api/orderApi";
import { useUser } from '../../utils/hooks/useUser';
function OrderSummary({ onPaymentComplete }) {
    const buttonStyles = {
        layout: 'vertical',
        color: 'blue',
        label: 'checkout',
    };
    const { subtotal, delivery, discount, defaultTotal, clearCart, items } = useCart();
    const { currentUser } = useUser();

    const onApprove = async () => {
        const order = {
            items: items,
            subtotal: subtotal,
            delivery: delivery,
            discount: discount,
            total: defaultTotal,
        };
        console.log('Order details:', order);
        const newOrder = await orderApi.createOrder({
            DateTime: new Date().toISOString(),
            TotalPrice: defaultTotal,
            Status: 'Pending',
            UserID: currentUser.userID
        });
        console.log('Order details:', newOrder);
        clearCart();
        alert(`Your order has been confirmed.`);
        onPaymentComplete();
    };

    return (
    <div className='order-summary'>
        <div className="space-between">
            <p>Subtotal</p>
            <p>{subtotal}</p>
        </div>
        {discount > 0 && (
              <div className="space-between">
                <p>Discount</p>
                <p>-10%</p>
              </div>
        )}
        <div className="space-between">
            <p>Delivery</p>
            <p>{delivery}</p>
        </div>
        <div className="line"></div>
        <div className="space-between bold">
            <p>Total</p>
            <p>{defaultTotal}</p>
        </div>
          <button onClick={onApprove}>Confirm</button>
    </div>
  )
}

export default OrderSummary