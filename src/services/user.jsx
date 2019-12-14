import { replace } from 'connected-react-router';
import config from '../config';
import storage from '../storage';
import { signIn } from '../actions';

export const userSignIn = (username) => (dispatch) => {
  fetch(`${config.baseURL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ username })
  }).then((res) => res.json())
    .then((data) => {
      storage.add('user', data);
      dispatch(signIn(data));
      dispatch(replace('/books'));
    });
};
