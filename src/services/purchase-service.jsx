import config from '../config';
import storage from '../storage/index';
import { purchaseSuccess, purchaseFail } from '../actions';

export const addPurchase = (data) => (dispatch) => {
  const dataUser = JSON.parse(storage.get('user'));
  const { token } = dataUser;

  if (token) {
    fetch(`${config.baseURL}purchase`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }).then((res) => res.json())
      .then((response) => {
        dispatch(purchaseSuccess(response));
      })
      .catch((err) => {
        dispatch(purchaseFail(err));
      });
  }
};
