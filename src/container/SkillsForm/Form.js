import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, reset, stopSubmit } from 'redux-form';

import * as skillsActions from '../../actions/skills/skillsActions';


const formValidator = (values) => { // eslint-disable-line consistent-return
  const errors = {};
  let errorState = false;
  if (!values.name) {
    errors.name = 'Skill is required';
    errorState = true;
  } else if (values.name.length < 4) {
    errors.name = "Skill characters too short!";
    errorState = true;
  } else if (!values.expirience) {
    errorState = true;
  }
  if (errorState) {
    return errors;
  }
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
    if (this.props !== nextProps) {
      if (nextProps.formData.skillForm.submitSucceeded) {
        actions.getSkills();
      }
    }
  }

  Submit(val) {
    const { actions } = this.props;
    actions.postSkills(val);
  }

  render() {
    const { pristine, submitting, valid, handleSubmit, handleFormSubmit } = this.props;

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
        <div className="last-two-items">
          <div className="form-item">
            <Field
              type="input"
              name="expirience"
              component="select"
              className="select-input"
            >
              <option value=" " className="options  options-selected">Experience</option>
              <option value="<1 Year" className="options">{`<1 Year`}</option>
              <option value="2 Years" className="options">1 - 3 Years</option>
              <option value="4 Years" className="options">3 - 5 Years</option>
              <option value="6 Years" className="options">5 - 7Years</option>
              <option value="> 7 Years" className="options">7+ Years</option>
            </Field>
          </div>
          <div className="form-item">
            <input
              type="submit"
              value="Submit"
              className="form-button"
              disabled={!valid || pristine || submitting}
              onClick={handleFormSubmit}
            />
          </div>
        </div>
      </form>
    );
  }
}


const mapStatetToProps = (state) => {
  return {
    appState: state.stateData,
    formData: state.form,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(skillsActions), dispatch),
  };
};

const Form = connect(mapStatetToProps, mapDispatchToProps)(reduxForm({ form: 'skillForm', validate: formValidator })(RenderForm));

export default Form;
