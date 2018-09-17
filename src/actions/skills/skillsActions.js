import * as actionTypes from '../actionTypes';

export function getInfo(data) {
  return {
    type: actionTypes.SKILLS_FETCHED,
    payload: data,
  };
}

function loadInfo() {
  return {
    type: actionTypes.SKILL_POSTED,
    payload: true,
  };
}

function loadError() {
  return {
    type: actionTypes.SKILL_POSTED,
    payload: false,
  };
}


export function getSkills() {
  return (dispatch) => {
    return fetch('http://localhost:3000/skills', {
      method: 'GET',
    })
      .then(response => response.json())
      .then((json) => {
        dispatch(getInfo(json));
      });
  };
}

export function postSkills(val) {
  return (dispatch) => {
    const values = { name: val.name, expirience: val.expirience };
    return fetch('http://localhost:3000/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => (response.json()))
      .then(doc => dispatch(loadInfo()))
      .catch(error => dispatch(loadError()));
  };
}

export function resetPostState() {
  return (dispatch) => {
    dispatch(loadError());
  };
}
