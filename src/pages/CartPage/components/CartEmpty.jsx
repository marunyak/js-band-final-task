import React from 'react';
import img from '../../../images/shopping-cart.png';

function CartEmpty() {
  return (

    <div
      className="cart-empty text-center"
      style={{
        width: '200px', height: '250px', margin: '0 auto', paddingTop: '200px'
      }}
    >
      <img src={img} alt="" style={{ width: '120px', height: '150px' }} />
      <p>Cart is empty...</p>
    </div>
  );
}
export default CartEmpty;
