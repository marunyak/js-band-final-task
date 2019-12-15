import { replace } from 'connected-react-router';
import config from '../config';
import storage from '../storage/index';
import { fetchBooksSuccess, fetchBooksFail } from '../actions';

export const getBooksFetch = () => (dispatch) => {
  const dataUser = JSON.parse(storage.get('user'));
  const { token } = dataUser;

  if (token) {
    fetch(`${config.baseURL}books`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
    }).then((res) => res.json())
      .then((response) => {
        dispatch(fetchBooksSuccess(response));
      })
      .catch((err) => {
        if (err.message === 'Unauthorized') {
          dispatch(replace('/signin'));
        } else {
          dispatch(fetchBooksFail(err));
        }
      });
  }
};
