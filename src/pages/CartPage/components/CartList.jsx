import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartEmpty from './CartEmpty';
import CartItem from './CartItem';
import { addPurchase } from '../../../services';

class CartList extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { addPurchase, cart: { books } } = this.props;
    const list = books.map((item) => item.id);
    addPurchase({ books: list });
  }

  render() {
    const { cart } = this.props;

    return (
      <div className="cart-list position-relative mt-3">
        <div className="d-flex flex-row-reverse">
          <button
            type="button"
            className="btn  btn-primary mr-4"
            onClick={this.handleSubmit}
            disabled={cart.books.length < 1}
          >
Purchase
          </button>
        </div>
        {cart.books.length < 1 ? <CartEmpty /> : (
          <div className="m-2">
            {cart.books.map((item) => <CartItem key={item.id} info={item} />)}
            <div className="total-price-item d-flex flex-row-reverse mt-2">
              <div>
                <h5>
Total Price, $
                  {' '}
                  {cart.books.length > 0
                    ? cart.books.reduce((sum, item) => (sum + (item.count * item.price)), 0) : null}

                </h5>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default connect(({ cart }) => ({ cart }), { addPurchase })(CartList);

CartList.propTypes = {
  cart: PropTypes.shape({
    books: PropTypes.any,
    message: PropTypes.any
  }),
  addPurchase: PropTypes.func
};
