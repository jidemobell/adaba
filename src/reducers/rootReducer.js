import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import skillsReducer from './skills/skillsReducer';


const rootReducer = combineReducers({
  stateData: skillsReducer,
  form: formReducer,
});

export default rootReducer;
