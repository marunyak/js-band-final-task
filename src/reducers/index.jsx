import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';
import { user } from './user';
import { catalog } from './booksList';

const reducers = combineReducers({ user, catalog, router: connectRouter(history) });

export default reducers;
