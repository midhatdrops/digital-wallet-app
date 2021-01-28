import React, {Component} from 'react'
import ContentHeader from '../common/template/content/contentHeader'
import Content from '../common/template/content/index'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {selectTab, showTabs} from '../reducers/actions/tabActions'
import {create} from '../reducers/actions/billingCyclesActions'

import Tabs from '../common/template/tabs/index'
import TabsContent from '../common/template/tabs/tabsContent'
import TabsHeader from '../common/template/tabs/tabsHeader'

import TabHeader from '../common/template/tabs/Header'
import TabContent from '../common/template/tabs/Content'

import List from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {

  componentWillMount() {
    this.props.selectTab('tabList')
    this.props.showTabs('tabList','tabCreate')
  }

  render() {
    return(<div>
      <ContentHeader title="Ciclos de Pagamento" subTitle="Cadastro"/>
      <Content>
        <Tabs>
          <TabsHeader>
            <TabHeader icon="bars" label="Listar" target="tabList"/>
            <TabHeader icon="plus" label="Incluir" target="tabCreate"/>
            <TabHeader icon="pencil" label="Alterar" target="tabUpdate"/>
            <TabHeader icon="trash-o" label="Excluir" target="tabDelete"/>
          </TabsHeader>
          <TabsContent>
            <TabContent id="tabList"><List /></TabContent>
            <TabContent id="tabCreate"><Form onSubmit={this.props.create}/></TabContent>
            <TabContent id="tabUpdate"><h1>Alterar</h1></TabContent>
            <TabContent id="tabDelete"><h1>Deletar</h1></TabContent>
            </TabsContent>
        </Tabs>
      </Content>
    </div>)
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)