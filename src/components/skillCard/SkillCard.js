
import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as skillsActions from '../../actions/skills/skillsActions';

class SkillCardComponent extends React.Component {
  handleClick(e) {
    const { actions, skillsArray, skillIndex } = this.props;
    actions.pushDelete(skillsArray[skillIndex]).then(() => {
      actions.getSkills();
    });
  }

  render() {
    const { skillIndex, skillName, skillExperience, cardClass } = this.props;
    return (
      <div className="card">
        <div className={cardClass}>
          <h6>{skillIndex}</h6>
        </div>
        <div className="card-base">
          <h6>{skillName}</h6>
          <span>{skillExperience}</span>
          <span
            className="delete"
            onClick={e => this.handleClick(e)}
            role="presentation"
          >
                  X
          </span>
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

const SkillCard = connect(mapStatetToProps, mapDispatchToProps)(SkillCardComponent);

export default SkillCard;
