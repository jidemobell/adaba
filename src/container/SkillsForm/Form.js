import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, reset, stopSubmit } from 'redux-form';

import * as skillsActions from '../../actions/skills/skillsActions';


const required = (value) => {
  return (value) ? undefined : 'Required';
};

const minValue = (value) => {
  return value && value.length < 4 ? `Must be at least 4` : undefined;
};


const skillField = ({
  input,
  placeholder,
  className,
  type,
  meta: { touched, error },
}) => (
  <div>
    <input {...input} type={type} placeholder={placeholder} className={className} />
    {touched && ((error && <span style={{ color: 'red' }}>{error}</span>))}
  </div>
);

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
    const { submitting, handleSubmit, handleFormSubmit } = this.props;

    return (
      <form className="form-controller" onSubmit={handleSubmit(val => this.Submit(val))}>
        <div className="form-item">
          <Field
            type="input"
            name="name"
            placeholder="Node.js, Postgres, React, etc.,"
            component={skillField}
            className="form-input"
            validate={[required, minValue]}
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
              disabled={submitting}
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

const Form = connect(mapStatetToProps, mapDispatchToProps)(reduxForm({ form: 'skillForm' })(RenderForm));

export default Form;
