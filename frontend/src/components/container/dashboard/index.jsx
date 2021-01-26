import React, {Component} from 'react'

import Content from '../../../common/template/content/index'
import ContentHeader from '../../../common/template/content/contentHeader'
import ValueBox from '../../../common/template/widget/valueBox'
import Row from '../../../common/template/layout/row'

 class DashBoard extends Component {

  render() {
    return(
      <div>
        <ContentHeader title="Dashboard" subTitle="versão 1.0"/>
        <Content>
          <Row>
          <ValueBox cols="12 4" bgColor="green" icon="bank" value="R$ 10" text="Total de Créditos"/>
          <ValueBox cols="12 4" bgColor="red" icon="credit-card" value="R$ 10" text="Total de Débitos"/>
          <ValueBox cols="12 4" bgColor="blue" icon="money" value="R$ 0" text="Valor Consolidado"/>
          </Row>
        </Content>
      </div>
    )
  }
}

export default DashBoard