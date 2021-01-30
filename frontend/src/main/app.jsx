import React from 'react'
import '../common/template/dependecies.js'

import Header from '../common/template/header/index'
import Sidebar from '../common/template/sidebar/index'
import Footer from '../common/template/footer/index'


import Messages from '../common/msg/messages'

export default props => {
  return(<div className="wrapper">
    <Header/>
    <Sidebar />
    <div className="content-wrapper">
      {props.children}
    </div>
    <Footer/>
    <Messages />
  </div>)
}