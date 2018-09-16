import React from 'react';
import '../../styles/App.css';
import '../../styles/response.css';

import SkillCard from '../skillCard/SkillCard';
import Form from '../SkillsForm/Form';

// skillCard to be added to skills div onSubmit
// from a skillset array.

class App extends React.Component {
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

export default App;
