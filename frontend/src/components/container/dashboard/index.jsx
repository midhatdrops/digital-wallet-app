import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getSummary} from '../../../reducers/actions/dashboardActions'

import Content from '../../../common/template/content/index'
import ContentHeader from '../../../common/template/content/contentHeader'
import ValueBox from '../../../common/template/widget/valueBox'
import Row from '../../../common/template/layout/row'

 class DashBoard extends Component {

  componentWillMount() {
    this.props.getSummary()
  }

  render() {
    const {credit,debt} = this.props.summary
    return(
      <div>
        <ContentHeader title="Dashboard" subTitle="versão 1.0"/>
        <Content>
          <Row>
          <ValueBox cols="12 4" bgColor="green" icon="bank" value={`R$ ${credit}`} text="Total de Créditos"/>
          <ValueBox cols="12 4" bgColor="red" icon="credit-card" value={`R$ ${debt}`} text="Total de Débitos"/>
          <ValueBox cols="12 4" bgColor="blue" icon="money" value={`R$ ${credit - debt}`} text="Valor Consolidado"/>
          </Row>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})

const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)