import { combineReducers } from 'redux';
import ConfirmationReducer from './confirmation_reducer';

const rootReducer = combineReducers({
  confirmation: ConfirmationReducer
});

export default rootReducer;
