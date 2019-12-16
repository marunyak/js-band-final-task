import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../../../actions';

class BookCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 1,
      countBooks: '1',
    };
  }

    handleChange = ({ target: { name, value } }) => {
      const { book: { count } } = this.props;
      if (value > count) {
        const { temp } = this.state;
        this.setState({ [name]: temp });
        this.input.value = temp;
      } else this.setState({ [name]: value, temp: value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const {
        book: {
          id, title, price
        }, addToCart
      } = this.props;
      const { countBooks } = this.state;
      addToCart({
        id, title, price, count: countBooks
      });
    }

    render() {
      const { countBooks } = this.state;
      const { book: { price, count } } = this.props;
      return (
        <div
          className="m-3 position-relative"
          style={{
            width: '600px',
            height: '400px',
            borderStyle: 'dotted',
            borderWidth: 2,
            borderRadius: 1
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <div className="price d-flex justify-content-between m-4">
              <div className="price-item"><h5>Price, $</h5></div>
              <div className="price-item"><h5>{price}</h5></div>
            </div>
            <div className="price d-flex justify-content-between m-4">
              <div className="price-item"><h5>Count</h5></div>
              <div className="price-item">
                <input
                  onChange={this.handleChange}
                  className="form-control"
                  name="countBooks"
                  type="number"
                  min="1"
                  max={count}
                  defaultValue={countBooks}
                  ref={(node) => { (this.input = node); }}
                  required
                />
              </div>
            </div>
            <div className="total-price d-flex justify-content-between m-4">
              <div className="price-item"><h5>Total price</h5></div>
              <div className="price-item">
                <h5>{(countBooks > 1 ? countBooks * price : price).toFixed(2)}</h5>
              </div>
            </div>
            <button
              className="btn btn-lg btn-primary position-absolute"
              style={{ right: '20px', bottom: '40px' }}
              type="submit"
            >
              Add to cart
            </button>
          </form>
        </div>
      );
    }
}
export default connect(null, { addToCart })(BookCounter);

BookCounter.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
  }),
  addToCart: PropTypes.func
};
