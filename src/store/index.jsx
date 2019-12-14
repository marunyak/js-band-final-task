import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import history from '../history';
import reducers from '../reducers';

const middleware = applyMiddleware(thunk, routerMiddleware(history));
export const store = createStore(reducers, middleware);
