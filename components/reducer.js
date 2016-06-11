import loginReducer from './Login/LoginAction';

import { combineReducers } from 'redux';

const reducer = combineReducers( {
  login_data: loginReducer
});

export default reducer;
