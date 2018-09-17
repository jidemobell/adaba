import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as skillsActions from '../../actions/skills/skillsActions';

const formValidator = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Skill is required';
  } else if (values.name.length < 4) {
    errors.name = "Skill characters too short!";
  } else if (!values.expirience) {
    errors.expirience = 'please select your experience range!';
  }
  return errors;
};


const skillField = ({
  input,
  type,
  placeholder,
  name,
  className,
  meta: { touched, error },
}) => {
  return (
    <div>
      <input {...input} placeholder={placeholder} type={type} name={name} className={className} />
      {touched && error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

class RenderForm extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { actions } = this.props;
    if (nextProps.appState.postAction === true) {
      actions.getSkills();
      this.forceUpdate();
    }
  }

  Submit(val) {
    const { actions } = this.props;
    actions.postSkills(val);
  }


  render() {
    const { handleSubmit, pristine, submitting, valid } = this.props;

    return (
      <form className="form-controller" onSubmit={handleSubmit(val => this.Submit(val))}>
        <div className="form-item">
          <Field
            type="input"
            name="name"
            placeholder="Node.js, Postgres, React, etc.,"
            component={skillField}
            className="form-input"
          />
        </div>
        <div className="form-item">
          <Field
            type="input"
            name="expirience"
            component="select"
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
          <input type="submit" value="Submit" className="form-button" disabled={!valid || pristine || submitting} />
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: 'skillForm', validate: formValidator })(RenderForm);
