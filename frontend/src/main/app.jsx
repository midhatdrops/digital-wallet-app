import React from 'react'
import '../common/template/dependecies.js'
import Header from '../common/template/header/index'
import Sidebar from '../common/template/sidebar/index'

export default props => {
  return(<div className="wrapper">
    <Header/>
    <Sidebar />
  </div>)
}