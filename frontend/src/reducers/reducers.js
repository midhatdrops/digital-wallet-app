import { combineReducers } from 'redux';
import DashboardReducer from './dashboardReducer';
import TabReducer from './tabReducer';
import BillingCyclesReducer from './billingCyclesReducer';
import { reducer as formReducer } from 'redux-form';
import { reducer as ToasterReducer } from 'react-redux-toastr';
import authReducer from '../auth/authReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  BillingCycle: BillingCyclesReducer,
  form: formReducer,
  toastr: ToasterReducer,
  auth: authReducer,
});

export default rootReducer;
