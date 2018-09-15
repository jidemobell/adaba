import * as actionTypes from '../actionTypes';

export function loadInfo(data) {
  return {
    type: actionTypes.SKILLS_FETCHED,
    payload: data,
  };
}

export function getSkills() {
  return (dispatch) => {
    return fetch('http://localhost:3000/skills', {
      method: 'GET',
    })
      .then(response => response.json())
      .then((json) => {
        console.log(json);
        dispatch(loadInfo(json));
      });
  };
}
