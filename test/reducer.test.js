/*eslint-disable*/
import configureStore from 'redux-mock-store';
import Thunk from 'redux-thunk';
import nock from 'nock';

import * as actionsTypes from '../src/actions/skills/skillsActions';
import skillsReducer from '../src/reducers/skills/skillsReducer';


const expect = require('chai').expect;
const middlewares = [Thunk]; 
const mockStore = configureStore(middlewares);

describe('reducer', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should return the initial state', () => {
    expect(skillsReducer({}, 'NO_ACTION_TYPE')).to.deep.equal({})
  })

  it('should handle SKILLS_FETCHED', () => {
    const initialState = {}; 
    const store = mockStore(initialState);
    const testData = [{id:124, name: 'React', expirience: '6 Years'}];
    const doc = nock('http://localhost:3000/')
                .get('/skills')
                .reply(200, testData);
    const data = doc.interceptors[0].body;
    store.dispatch(actionsTypes.getInfo(JSON.parse(data)));
  
    const actions = store.getActions();
    expect(skillsReducer({}, actions[0])).to.deep.equal({
      skills: [{id:124, name: 'React', expirience: '6 Years'}]
    })
  })

  it('should handle SKILL_POSTED', () => {
    const initialState = {}; 
    const store = mockStore(initialState);
    const testData = {id:124, name: 'React', expirience: '6 Years'};
    store.dispatch(actionsTypes.loadInfo(testData));
  
    const actions = store.getActions();
    expect(skillsReducer({}, actions[0])).to.deep.equal({
      postAction: {id:124, name: 'React', expirience: '6 Years'}
    })
  })

  it('should handle SKILL_REMOVED', () => {
    const initialState = {}; 
    const store = mockStore(initialState);
    store.dispatch(actionsTypes.deleteSkill());
  
    const actions = store.getActions();
    expect(skillsReducer({}, actions[0])).to.deep.equal({
      deleteAction: true
    })
  })
})