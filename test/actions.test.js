/*eslint-disable*/
import configureStore from 'redux-mock-store';
import Thunk from 'redux-thunk';
import nock from 'nock';

import * as types from '../src/actions/actionTypes';
import * as actionsTypes from '../src/actions/skills/skillsActions';


const expect = require('chai').expect;
const middlewares = [Thunk]; 
const mockStore = configureStore(middlewares);




describe('actions return accurate payload', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  
  it('should dispatch getSkills action', () => {
    const initialState = {}; 
    const store = mockStore(initialState);
    const testData = [{id:124, name: 'React', expirience: '6 Years'}];

    const doc = nock('http://localhost:3000/')
                .get('/skills')
                .reply(200, testData);
    const data = doc.interceptors[0].body;
    store.dispatch(actionsTypes.getInfo(data));
  
    const actions = store.getActions();
    const expectedPayload = { type: types.SKILLS_FETCHED }
    expect(actions[0].type).to.be.equal(expectedPayload.type);
    expect(JSON.parse(actions[0].payload)[0].id).to.be.equal(124); 
  })
  
  it('should dispatch postSkills action', () => {
    const initialState = {}; 
    const store = mockStore(initialState);
    const skill = {id:124, name: 'React', expirience: '6 Years'};
    store.dispatch(actionsTypes.loadInfo(skill));
  
    const actions = store.getActions();
    const expectedPayload = { type: types.SKILL_POSTED }
    expect(actions[0].type).to.be.equal(expectedPayload.type);
    expect(actions[0].payload).to.be.equal(skill);
    expect(actions[0].payload.name).to.be.equal('React');
  })

  it('should dispatch pushDelete action', () => {
    const initialState = {}; 
    const store = mockStore(initialState);
  
    store.dispatch(actionsTypes.deleteSkill());
  
    const actions = store.getActions();
    const expectedPayload = { type: types.SKILL_REMOVED }
    expect(actions[0].type).to.be.equal(expectedPayload.type);
    expect(actions[0].payload).to.be.true;  
  })
});
