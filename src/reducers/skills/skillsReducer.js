import * as actionTypes from '../../actions/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case actionTypes.SKILLS_FETCHED:
      return { ...state, authenticated: true };
    default:
      return state;
  }
}
