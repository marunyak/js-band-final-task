export const ADD_BOOK = 'ADD_BOOK';
export const PURCHASE_SUCCESS = 'PURCHASE_SUCCESS';
export const PURCHASE_FAIL = 'PURCHASE_FAIL';

export const addToCart = (newValue) => ({
  type: ADD_BOOK,
  payload: { newValue }
});

export const purchaseSuccess = (res) => ({
  type: PURCHASE_SUCCESS,
  payload: res
});

export const purchaseFail = (err) => ({
  type: PURCHASE_SUCCESS,
  payload: err
});
