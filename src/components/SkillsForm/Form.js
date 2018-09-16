// send options values and skills to state
import React from 'react';
import { reduxForm, Field } from 'redux-form';


const skillForm = ({ handleSubmit }) => {
  return (
    <form className="form-controller" onSubmit={handleSubmit(val => console.log(val))}>
      <div className="form-item">
        <Field
          type="input"
          component="input"
          name="name"
          placeholder="Node.js, Postgres, React, etc.,"
          className="form-input"
        />
      </div>
      <div className="form-item">
        <Field
          type="input"
          component="select"
          name="experience"
          placeholder="experience"
          className="select-input"
        >
          <option value=" " className="options  options-selected">Experience</option>
          <option value="< 1" className="options">{`<1 Year`}</option>
          <option value="2 Years" className="options">1 - 3 Years</option>
          <option value="4 Years" className="options">3 - 5 Years</option>
          <option value="6 Years" className="options">5 - 7Years</option>
          <option value="> 7 Years" className="options">7+ Years</option>
        </Field>
      </div>
      <div className="form-item">
        <input type="submit" value="Submit" className="form-button" />
      </div>
    </form>
  );
};


export default reduxForm({ form: 'skillForm' })(skillForm);
