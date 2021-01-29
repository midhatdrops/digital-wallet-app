import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Field, arrayInsert, arrayRemove} from 'redux-form'
import Grid from '../common/template/layout/grid'
import Input from '../common/template/input'
import If from '../common/operators/if'

class ItemList extends Component {
  add(index,item = {}) {
      if(!this.props.readOnly) {
          this.props.arrayInsert('billingCycleForm', `${this.props.field}`, index, item)
      }
  }
  remove(index) {
    if(!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove('billingCycleForm',`${this.props.field}`, index)
    }
  }

  renderRows() {
    const list = this.props.list || []
    const field = this.props.field || ''
    return list.map((item,index) => (
      <tr key={index}>
      <td><Field name={`${field}[${index}].name`} component={Input} placeholder="Informe o Nome" readOnly={this.props.readOnly}/></td>
      <td><Field name={`${field}[${index}].value`} component={Input} placeholder="Informe o Valor" readOnly={this.props.readOnly}/></td>
      <If test={this.props.showStatus}>
      <td><Field name={`${field}[${index}].status`} component={Input} placeholder="Informe o Status" readOnly={this.props.readOnly}/></td>
      </If>
      <td>
        <button type="button" onClick={() => this.add(index + 1)} className="btn btn-success"><i className="fa fa-plus"></i></button>
        <button type="button" onClick={() => this.add(index + 1, item)} className="btn btn-warning"><i className="fa fa-clone"></i></button>
        <button type="button" onClick={() => this.remove(index)} className="btn btn-danger"><i className="fa fa-trash-o"></i></button>
      </td>
    </tr>
    ))
  
  }

  render() {
    return(
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>{this.props.legend}</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <If test={this.props.showStatus}>
                  <th>Status</th>
                </If>
                <th className="table-actions">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </fieldset>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch)

export default connect(null,mapDispatchToProps)(ItemList)