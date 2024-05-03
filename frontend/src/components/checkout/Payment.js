import React from 'react';

function Payment() {
    return (
        <div className='checkout-payment'>
            <h1>PAYMENT OPTIONS</h1>
            <div className="line-divider"></div>
            <div className="payment-option">
                <label>
                    <input type="radio" value="cashOnDelivery" checked readOnly />
                    Cash on Delivery
                </label>
            </div>
            <p>Please have the exact amount ready at the time of delivery.</p>
        </div>
    )
}

export default Payment;