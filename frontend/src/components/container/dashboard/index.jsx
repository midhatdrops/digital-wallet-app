import React, {Component} from 'react'

import Content from '../../../common/template/content/index'
import ContentHeader from '../../../common/template/content/contentHeader'

 class DashBoard extends Component {

  render() {
    return(
      <div>
        <ContentHeader title="Dashboard" subTitle="versão 1.0"/>
        <Content>
          DashBoard
        </Content>
      </div>
    )
  }
}

export default DashBoard