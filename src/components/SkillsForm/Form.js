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
            <option value=" " className="options  options-selected" selected>Experience</option>
            <option value="< 1" className="options">{`<1 Year`}</option>
            <option value="1 - 3" className="options">1 - 3 Years</option>
            <option value="3 - 5" className="options">3 - 5 Years</option>
            <option value="5 - 7" className="options">5 - 7Years</option>
            <option value="7+" className="options">7+ Years</option>
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
