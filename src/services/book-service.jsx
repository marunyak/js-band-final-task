import { replace } from 'connected-react-router';
import config from '../config';
import storage from '../storage';
import { fetchBookSuccess, fetchBookFail } from '../actions';

export const getBookFetch = (id) => (dispatch) => {
  const dataUser = JSON.parse(storage.get('user'));
  const { token } = dataUser;
  if (token) {
    fetch(`${config.baseURL}books/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchBookSuccess(data));
      })
      .catch((err) => {
        if (err === 'Unauthorized') {
          storage.remove('user');
          dispatch(replace('/signin'));
        } else {
          dispatch(fetchBookFail(err));
        }
      });
  }
};
