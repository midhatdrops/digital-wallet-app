import React from 'react'
import '../common/template/dependecies.js'
import Header from '../common/template/header/index'
import Sidebar from '../common/template/sidebar/index'
import Footer from '../common/template/footer/index'

export default props => {
  return(<div className="wrapper">
    <Header/>
    <Sidebar />
    <div className="content-wrapper">
      <h1>Conteudo</h1>
    </div>
    <Footer/>
  </div>)
}