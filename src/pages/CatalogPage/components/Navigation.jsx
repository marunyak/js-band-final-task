import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signOut } from '../../../actions';
import img from '../images/shopping-cart.png';

class Navigation extends React.Component {
    handleClick = () => {
      const { signOut } = this.props;
      signOut();
    }

    render() {
      const { username, avatar } = this.props;
      return (
        <div className="d-flex justify-content-between align-items-center nav">
          <div className="nav-item mr-4">
            <img src={img} alt="" style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
          </div>
          <div className="nav-item mr-4">
            <button type="button" className="btn btn-sm btn-primary" onClick={this.handleClick}>Sign-Out</button>
          </div>
          <div className="nav-item mr-4">
            <img src={avatar} alt="" className="rounded-circle" style={{ width: '50px', height: '50px' }} />
          </div>
          <div className="nav-item mr-4">
            <span>{username}</span>
          </div>
        </div>
      );
    }
}
const mapStateToProps = ({ user }) => ({
  username: user.username,
  avatar: user.avatar
});
const mapPropsToDispatch = (dispatch) => ({ signOut: () => dispatch(signOut()) });

export default connect(mapStateToProps, mapPropsToDispatch)(Navigation);

Navigation.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  signOut: PropTypes.func
};
