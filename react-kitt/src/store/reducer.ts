import { combineReducers } from 'redux';
import NumStatus from './NumStatus/reducer';
import ArrStatus from './ArrStatus/reducer';
import User from './User/index';
const reducers = combineReducers({
  NumStatus,
  ArrStatus,
  User,
});

export default reducers;
