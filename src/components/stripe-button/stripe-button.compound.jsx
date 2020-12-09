import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
 
  const priceForStripe = price * 100;
  const publishablekey = 'pk_test_51HwNsNJ6g323kVMpxlBxbHw8SeHGwJDCibuhEuWqMJBblTPYqYm32Bp36qbZLwDyb13XP3DgtQgaJeavKuM8WiLl0097ynvdD0';


  const onToken = token => {
    console.log(token);
    alert('Payment Successful')

  }
  return (
    <StripeCheckout 
      label='pay now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${ price }`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;