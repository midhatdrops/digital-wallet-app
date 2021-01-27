import React, {Component} from 'react'
import ContentHeader from '../common/template/content/contentHeader'
import Content from '../common/template/content/index'

import Tabs from '../common/template/tabs/index'
import TabsContent from '../common/template/tabs/tabsContent'
import TabsHeader from '../common/template/tabs/tabsHeader'

import TabHeader from '../common/template/tabs/Header'

export default class BillingCycle extends Component {

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
              
            </TabsContent>
        </Tabs>
      </Content>
    </div>)
  }
}