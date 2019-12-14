import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Main from '../../components/Main';
import { userSignIn } from '../../services';
import img from '../../images/defaultPhoto.jpg';

class SignIn extends React.Component {
  handleValidation = (value) => {
    const valueLength = value.length;
    const errorField = this.error;
    errorField.innerHTML = '';
    if (!this.input.value || valueLength < 4 || valueLength > 16) {
      errorField.innerHTML = 'Field is not valid';
      return false;
    }
    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { login } = this.props;
    const username = this.input.value;
    const isValid = this.handleValidation(username);
    if (isValid) {
      login(username);
    }
  }

  render() {
    return (
      <>
        <Header />
        <Main>
          <div className="d-flex justify-content-center mt-5">
            <div className="text-center">
              <img src={img} alt="" style={{ height: '200px', width: '200px' }} />
              <form>
                <div className="form-group mt-3">
                  <label htmlFor="username" style={{ display: 'block' }} className="font-weight-bold">
                Username
                    <input
                      type="text"
                      name="username"
                      className="form-control mt-2"
                      placeholder="type Username"
                      ref={(node) => { this.input = node; }}
                      required
                    />
                    <div
                      className="error text-danger text-break text-center"
                      ref={(node) => { this.error = node; }}
                    />
                  </label>
                  <div
                    className="btn btn-block btn-primary mt-3"
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => this.handleSubmit(e)}
                  >
Sign-In
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Main>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (userInfo) => dispatch(userSignIn(userInfo))
});

export default withRouter(connect(null, mapDispatchToProps)(SignIn));

SignIn.propTypes = {
  login: PropTypes.func
};
