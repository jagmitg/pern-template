import { combineReducers } from 'redux';
import authentication from './authenticationReducer';
import profile from './profileReducer';
import error from './errorReducer';
import globalNotification from './globalNotificationReducer';

export default combineReducers({
  authentication,
  profile,
  error,
  globalNotification,
});
