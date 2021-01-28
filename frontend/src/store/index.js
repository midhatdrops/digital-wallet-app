import { createStore } from 'redux';
import Reducers from '../reducers/reducers';

import { applyMiddleware } from 'redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = applyMiddleware(multi, thunk, promise)(createStore)(
  Reducers,
  devTools
);
