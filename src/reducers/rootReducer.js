import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ACCOUNT_SAVE_SUCCESS } from '../actions/actionTypes'; 
import skillsReducer from './skills/skillsReducer';


const rootReducer = combineReducers({
  stateData: skillsReducer,
  form: formReducer.plugin({
    account: (state, action) => { // <------ 'account' is name of form given to reduxForm()
      switch (action.type) {
        case ACCOUNT_SAVE_SUCCESS:
          return action.payload;       // <--- blow away form data
        default:
          return state;
      }
    },
  }),
});

export default rootReducer;
