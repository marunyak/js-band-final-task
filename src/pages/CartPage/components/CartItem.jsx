import React from 'react';
import PropTypes from 'prop-types';

function CartItem({ info }) {
  return (
    <div className="cart-item d-flex justify-content-between align-items-center border p-4">
      <div className="item d-flex justify-content-between">
        <div className="cart-title mr-3">{info.title}</div>
        <div className="cart-count">
Count:
          {' '}
          {info.count}
        </div>
      </div>
      <div className="item">
Total price:
        {' '}
        {info.count * info.price}
        {'$'}
      </div>
    </div>
  );
}
export default CartItem;

CartItem.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    count: PropTypes.string,
    price: PropTypes.number,
  })
};
