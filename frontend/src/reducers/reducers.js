import { combineReducers } from 'redux';
import DashboardReducer from './dashboardReducer';
import TabReducer from './tabReducer';
import BillingCyclesReducer from './billingCyclesReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  BillingCycle: BillingCyclesReducer,
  form: formReducer,
});

export default rootReducer;
