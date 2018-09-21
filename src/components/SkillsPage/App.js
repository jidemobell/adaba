import React from 'react';


import '../../stylesheets/main.scss';

import SkillCard from "../../container/skillCard/SkillCard";
import Form from '../../container/SkillsForm/Form';


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
      <div className="to-test">
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
                    key={`key-${skillSet.id}`}
                    skillIndex={i + 1}
                    skillName={skillSet.name}
                    skillExperience={skillSet.expirience}
                    cardClass={(i <= 4) ? 'card-header-two' : 'card-header'}
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

export default SkillApp;
