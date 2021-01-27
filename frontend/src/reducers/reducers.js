import { combineReducers } from 'redux';
import DashboardReducer from './dashboardReducer';
import TabReducer from './tabReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
});

export default rootReducer;
