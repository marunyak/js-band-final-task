import { SIGN_IN, CHECK_SIGN, SIGN_OUT } from '../actions';
import storage from '../storage/index';

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
      let userData = storage.get('user');
      if (userData) {
        userData = JSON.parse(userData);
        return { ...state, ...userData };
      }
      return state;
    }
    case SIGN_OUT: {
      storage.remove('user');
      return { ...state, ...initialState };
    }
    default:
      return state;
  }
};
