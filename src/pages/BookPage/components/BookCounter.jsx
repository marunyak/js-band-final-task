import React from 'react';
import PropTypes from 'prop-types';

class BookCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countBooks: 0,
    };
  }

    handleChange = ({ target: { name, value } }) => {
      const { count } = this.props;
      if (value > count) return;
      this.setState({ [name]: value });
    }

    handleSubmit = () => 1

    render() {
      const { countBooks } = this.state;
      const { price, count } = this.props;
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
                  defaultValue="1"
                  required
                />
              </div>
            </div>
            <div className="total-price d-flex justify-content-between m-4">
              <div className="price-item"><h5>Total price</h5></div>
              <div className="price-item">
                <h5>{(countBooks ? countBooks * price : price).toFixed(2)}</h5>
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
export default BookCounter;

BookCounter.propTypes = {
  price: PropTypes.number,
  count: PropTypes.number,
};
