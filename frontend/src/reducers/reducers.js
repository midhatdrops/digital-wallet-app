import { combineReducers } from 'redux';
import DashboardReducer from './dashboardReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
});

export default rootReducer;
