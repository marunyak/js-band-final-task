import { SIGN_IN, CHECK_SIGN } from '../actions';

const initialState = {
  username: '',
  avatar: '',
  token: ''
};

export const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN: {
      const newState = {
        ...state,
        username: payload.username,
        avatar: payload.avatar,
        token: payload.token,
      };
      return newState;
    }
    case CHECK_SIGN: {
      let userData = localStorage.getItem('user');
      if (userData) {
        userData = JSON.parse(userData);
        return { ...state, ...userData };
      }
      return state;
    }
    default:
      return state;
  }
};
