import * as actionTypes from '../../actions/actionTypes';

const skillsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SKILLS_FETCHED:
      return { ...state, skills: action.payload };
    default:
      return state;
  }
};

export default skillsReducer;
