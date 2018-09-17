import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/App.css';

import * as skillsActions from '../../actions/skills/skillsActions';

import SkillCard from '../skillCard/SkillCard';
import Form from '../../containers/Form/Form';

class SkillApp extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getSkills();
  }

  getSkillsFromState() {
    const { skillsArray } = this.props;
    return (skillsArray === undefined) ? [] : skillsArray;
  }


  render() {
    const skillsArray = this.getSkillsFromState();
    return (
      <div>
        <div className="container">
          <h1 className="heading">ADD YOUR SKILLS</h1>
          <div className="skills-form">
            <Form />
          </div>
          <div className="skill-box">
            <div className="skills">
              {skillsArray.map((skillSet, i) => {
                return (
                  <SkillCard
                    key={`key-${skillSet.name}`}
                    skillIndex={i + 1}
                    skillName={skillSet.name}
                    skillExperience={skillSet.expirience}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetToProps = (state) => {
  return {
    skillsArray: state.stateData.skills,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(skillsActions), dispatch),
  };
};

const App = connect(mapStatetToProps, mapDispatchToProps)(SkillApp);

export default App;
