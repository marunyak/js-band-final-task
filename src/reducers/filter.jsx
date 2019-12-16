import { CHANGE_FILTER } from '../actions';

const initialState = {
  search: '',
  price: 'none'
};

export const filter = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_FILTER: {
      return {
        ...state,
        ...payload.newValue
      };
    }
    default:
      return state;
  }
};
