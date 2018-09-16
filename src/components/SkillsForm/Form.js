import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="form-controller">
        <div className="form-item">
          <input type="text" name="firstname" className="form-input" placeholder="Node.js, Postgres, React, etc.," />
        </div>
        <div className="form-item">
          <select name="cars" className="select-input">
            <option value=" " selected className="options">Experience</option>
            <option value="1" className="options">1 Year</option>
          </select>
        </div>
        <div className="form-item">
          <input type="submit" value="Submit" className="form-button" />
        </div>
      </form>
    );
  }
}

export default Form;
