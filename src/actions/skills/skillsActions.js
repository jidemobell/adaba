import * as actionTypes from '../actionTypes';

/**
 * This function is used by a get skill
 * action function when fetching user
 * skills during app initialization.
 */
export function getInfo(data) {
  return {
    type: actionTypes.SKILLS_FETCHED,
    payload: data,
  };
}

/**
 * This is function is used by the post-skill 
 * action to load data to store
 * when a skill is submitted
 */
function loadInfo(doc) {
  return {
    type: actionTypes.SKILL_POSTED,
    payload: doc,
  };
}

/**
 * This function aids post-skill action
 * to load error if submission fails.
 */
function loadError() {
  return {
    type: actionTypes.SKILL_POSTED,
    payload: false,
  };
}

/**
 * This function is the action function 
 * to fatch user skills and other skill 
 * details from the database. 
 */
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

/**
 * This function is the action called to 
 * submit a nue user skill to the database
 */
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
      .then((doc) => {
        dispatch(loadInfo(doc));
      })
      .catch(error => dispatch(loadError(error)));
  };
}

/**
 * This function is used action called to
 * set a prop that a skill submission action 
 * is yet to occur
 */

export function resetPostState() {
  return (dispatch) => {
    dispatch(loadError());
  };
}

/** 
 * This action is called when the delete-skill
 * mark is clicked.It returns a boolean payload
*/
export function pushDelete(val) {
  return (dispatch) => {
    const values = { id: val.id, name: val.name, expirience: val.expirience };
    return fetch(`http://localhost:3000/skills/${values.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(doc => dispatch(() => {
        return {
          type: actionTypes.SKILL_REMOVED,
          payload: true,
        };
      }))
      .catch(error => dispatch(loadError()));
  };
}

/**
 * This action is used by the form reducer 
 * to reset form values.
 */

export function skillSubmitSucces() {
  return (dispatch) => {
    dispatch(() => {
      return {
        type: actionTypes.ACCOUNT_SAVE_SUCCESS,
        payload: undefined,
      };
    });
  };
}
