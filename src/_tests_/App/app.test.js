// /* eslint-disable no-undef */

// import React from 'react';
// import Enzyme, { mount } from 'enzyme';
// import { Adapter } from 'enzyme-adapter-react-16';

// import App from '../../containers/skillPage/App';

// Enzyme.configure({ adapter: new Adapter() });

// const setup = () => {
//   const props = {
//     skillsArray: jest.fn(),
//   };

//   const enzymeWrapper = mount(<App {...props} />);

//   return {
//     props,
//     enzymeWrapper,
//   };
// };

// describe('components', () => {
//   describe('<App />', () => {
//     it('should render self and components', () => {
//       const { enzymeWrapper } = setup();

//       expect(enzymeWrapper).find('div').hasClass('to-test').toBe(true);
//     });
//   });
// });

/* eslint-disable no-undef */


import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import Adapter from 'enzyme-adapter-react-16';

import App from '../../components/SkillsPage/App';

configure({ adapter: new Adapter() });

describe('App component testing', () => {
  it('renders welcome message', () => {
    const wrapper = shallow(<App />);
    const welcome = <h1 className='App-title'>Welcome to React</h1>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });
});
