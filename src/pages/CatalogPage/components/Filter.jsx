import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../../actions';

class Filter extends React.Component {
  handleChange = ({ target: { value, name } }) => {
    const { changeFilter } = this.props;
    changeFilter({ [name]: value });
  };

  render() {
    return (
      <section className="mt-4 container">
        <form className="filter d-flex" method="#">
          <div className="item">
            <input
              onChange={this.handleChange}
              type="text"
              name="search"
              className="form-control mr-5"
              style={{ width: '400px' }}
              placeholder="Search by title"
            />
          </div>
          <div className="item">
            <select onChange={this.handleChange} name="price" className="form-control">
              <option value="none">Price</option>
              <option value="low_price">0 &lsaquo; Price &lsaquo; 15</option>
              <option value="medium_price">15 &lsaquo; Price &lsaquo; 30</option>
              <option value="high_price">Price &rsaquo; 30</option>
            </select>
          </div>
        </form>
      </section>
    );
  }
}

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired
};


export default connect(null, { changeFilter })(Filter);
