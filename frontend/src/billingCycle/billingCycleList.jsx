import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {getList, showUpdate, showDelete} from '../reducers/actions/billingCyclesActions'

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
        <td>
          <button className="btn btn-warning" onClick={() => this.props.showUpdate(b)}><i className="fa fa-pencil"></i></button>
          <button className="btn btn-danger" onClick={() => this.props.showDelete(b)}><i className="fa fa-trash-o"></i></button>
        </td>
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
            <th>Ações</th>
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

const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete }, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleList)