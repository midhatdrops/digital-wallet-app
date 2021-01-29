import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {init} from '../reducers/actions/billingCyclesActions'
import {reduxForm, Field} from 'redux-form'
import InputLabel from '../common/template/form/inputAndLabel'

class BillingCycleForm extends Component {

  render() {
    const {handleSubmit} = this.props
    return(
      <form role="form" onSubmit={handleSubmit}>
          <div className="box-body">
            <Field name="name" component={InputLabel} cols="12 4" label="Nome" placeholder="Informe o nome"/>
            <Field name="month" component={InputLabel} cols="12 4" type="number" placeholder="Informe o mês" label="Mês" />
            <Field name="year" component={InputLabel} cols="12 4" type="number" placeholder="Informe o ano" label="Ano"/>
          </div>
          <div className="box-footer">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
          </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)

export default connect(null,mapDispatchToProps)(BillingCycleForm)