import { createStore } from 'redux';
import Reducers from '../reducers/reducers';

import { applyMiddleware } from 'redux';
import promise from 'redux-promise';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = applyMiddleware(promise)(createStore)(Reducers, devTools);
