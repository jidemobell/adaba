// to recieve skill and options value from form
// from the state to local props

import React from 'react';

class SkillCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h6>1</h6>
        </div>
        <div className="card-base">
          <h6>React</h6>
          <span>1 Year</span>
        </div>
      </div>
    );
  }
}

export default SkillCard;
