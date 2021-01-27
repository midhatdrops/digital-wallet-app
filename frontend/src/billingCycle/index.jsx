import React, {Component} from 'react'
import ContentHeader from '../common/template/content/contentHeader'
import Content from '../common/template/content/index'

export default class BillingCycle extends Component {

  render() {
    return(<div>
      <ContentHeader title="Ciclos de Pagamento" subTitle="Cadastro"/>
      <Content>
        Ciclos de Pagamento
      </Content>
    </div>)
  }
}