import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {getList} from '../reducers/actions/billingCyclesActions'

class BillingCycleList extends Component {

  componentWillMount() {
    this.props.getList()
  }

  renderRows() {
    const list = this.props.list || []
    return list.map((b) => (
      <tr key={b._id}>
        <td>{b.name}</td>
        <td>{b.month}</td>
        <td>{b.year}</td>
      </tr>
    ))
  }
  
  render() {
    console.log(this.props.list)
    return(
      <div>
        <table className="table">
          <thead>
            <tr>
            <th>Nome</th>
            <th>Mês</th>
            <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.BillingCycle.list
})

const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleList)