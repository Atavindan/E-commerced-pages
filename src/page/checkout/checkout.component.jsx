import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item'

import {selectCartItems , selectCartTotal} from '../../redux/cart/cart.selectors';
import './checkout.style.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.compound'

const CheckoutPage = ({cartItems,total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Descriptions</span>
      </div>
      <div className="header-block">
        <span> Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItems => 
        <CheckoutItem key={cartItems.id} cartItem={cartItems}/>
      )
    }
    <div className="total">
        <span>Total:${total}</span>
        <div className='test-warning'>
          <p>Please following test Model in payment </p>
          <p>4242 4242 4242 4242  DOE=01/22 CVV=123</p>
        </div>
        <StripeCheckoutButton price={total} />
    </div>
  </div>
)


const mapStateProps = createStructuredSelector ({
  cartItems:selectCartItems,
  total:selectCartTotal
})

export default connect(mapStateProps)(CheckoutPage);

