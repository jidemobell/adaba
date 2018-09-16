import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/App.css';
import '../../styles/response.css';

import * as skillsActions from '../../actions/skills/skillsActions';

import SkillCard from '../skillCard/SkillCard';
import Form from '../SkillsForm/Form';

// skillCard to be added to skills div onSubmit
// from a skillset array.

class SkillApp extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getSkills();
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="heading">ADD YOUR SKILLS</h1>
          <div className="skills-form">
            <Form />
          </div>
          <div className="skill-box">
            <div className="skills">
              <SkillCard />
              <SkillCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetToProps = (state) => {
  console.log(state);
  return {

  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(skillsActions), dispatch),
  };
};

const App = connect(mapStatetToProps, mapDispatchToProps)(SkillApp);

export default App;
