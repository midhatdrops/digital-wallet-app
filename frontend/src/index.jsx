import React from 'react'
import ReactDom from 'react-dom'
import App from './main/app'

import Routes from './main/routes'

import {store} from './store/index'
import {Provider} from 'react-redux'


ReactDom.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.getElementById('app'))