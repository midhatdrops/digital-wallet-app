import { createStore } from 'redux';
import Reducers from '../reducers/reducers';

import { applyMiddleware } from 'redux';
import promise from 'redux-promise';

export const store = applyMiddleware(promise)(createStore)(Reducers);
