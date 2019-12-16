import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';
import { user } from './user';
import { filter } from './filter';
import { catalog } from './booksList';
import { book } from './book';
import { cart } from './cart';

const reducers = combineReducers({
  user, catalog, book, filter, cart, router: connectRouter(history)
});

export default reducers;
