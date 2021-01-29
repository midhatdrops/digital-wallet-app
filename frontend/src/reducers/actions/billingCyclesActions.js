import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { selectTab, showTabs } from './tabActions';

const BASE_URL = 'http://localhost:3003/api/billingcycles';
const INITIAL_VALUES = {};

export function getList() {
  const request = axios.get(BASE_URL);
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request,
  };
}

export function create(values) {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}`, values)
      .then((resp) => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.');
        dispatch(init());
      })
      .catch((err) => {
        err.response.data.errors.forEach((e) => toastr.error('Erro', e));
      });
  };
}

export function showUpdate(billingCycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle),
  ];
}

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES),
  ];
}
