import { combineReducers } from 'redux';
import DashboardReducer from './dashboardReducer';
import TabReducer from './tabReducer';
import BillingCyclesReducer from './billingCyclesReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  BillingCycle: BillingCyclesReducer,
});

export default rootReducer;
