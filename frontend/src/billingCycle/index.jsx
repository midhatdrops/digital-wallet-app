import React, {Component} from 'react'
import ContentHeader from '../common/template/content/contentHeader'
import Content from '../common/template/content/index'

import Tabs from '../common/template/tabs/index'
import TabsContent from '../common/template/tabs/tabsContent'
import TabsHeader from '../common/template/tabs/tabsHeader'

export default class BillingCycle extends Component {

  render() {
    return(<div>
      <ContentHeader title="Ciclos de Pagamento" subTitle="Cadastro"/>
      <Content>
        <Tabs>
          <TabsHeader>
            
          </TabsHeader>
          <TabsContent>
              
            </TabsContent>
        </Tabs>
      </Content>
    </div>)
  }
}