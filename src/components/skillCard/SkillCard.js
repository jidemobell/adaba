
import React from 'react';

class SkillCard extends React.Component {
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
        </div>
      </div>
    );
  }
}

export default SkillCard;
