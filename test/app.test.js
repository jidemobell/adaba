/*eslint-disable*/
import React from 'react';
import configureStore from 'redux-mock-store';
import Thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import * as types from '../src/actions/actionTypes';
import skillsReducer from '../src/reducers/skills/skillsReducer';
import App from '../src/components/SkillsPage/App';



Enzyme.configure({ adapter: new Adapter() });


const expect = require('chai').expect;
const middlewares = [Thunk]; 
const mockStore = configureStore(skillsReducer, middlewares);



describe('<App />', () => {
  it('should get a class of rendered component', () => {
    const initialState = { }; 
    const store = mockStore(initialState);

    const props = {
			actions: {
				getSkills: () => {
          return {
            type: types.SKILLS_FETCHED,
            payload: [{}]
          }
        }
			}
		};

    
    const app = shallow(
      <Provider store={store} >
       <App  {...props} />
     </Provider>,
    ).dive();

    expect(app.hasClass('to-test'));
  })
});
