import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {init} from '../reducers/actions/billingCyclesActions'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import InputLabel from '../common/template/form/inputAndLabel'
import ItemList from './itemList'

class BillingCycleForm extends Component {

  render() {
    const {handleSubmit, readOnly, credits, debts} = this.props
    return(
      <form role="form" onSubmit={handleSubmit}>
          <div className="box-body">
            <Field name="name" component={InputLabel} cols="12 4" label="Nome" placeholder="Informe o nome" readOnly={readOnly}/>
            <Field name="month" component={InputLabel} cols="12 4" type="number" placeholder="Informe o mês" label="Mês" readOnly={readOnly}/>
            <Field name="year" component={InputLabel} cols="12 4" type="number" placeholder="Informe o ano" label="Ano" readOnly={readOnly}/>
            <ItemList cols="12 6" list={credits} readOnly={readOnly} field="credits" legend="Créditos"/>
            <ItemList cols="12 6" list={debts} readOnly={readOnly} field="debts" legend="Débitos" showStatus={true}/>
          </div>
          <div className="box-footer">
            <button type="submit" className={`btn btn-${this.props.submitClass}`}>{`${this.props.submitLabel}`}</button>
            <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
          </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)

const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
  credits: selector(state,'credits'),
  debts: selector(state,'debts')
})

export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleForm)