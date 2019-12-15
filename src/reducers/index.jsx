import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';
import { user } from './user';
import { filter } from './filter';
import { catalog } from './booksList';
import { book } from './book';

const reducers = combineReducers({
  user, catalog, book, filter, router: connectRouter(history)
});

export default reducers;
