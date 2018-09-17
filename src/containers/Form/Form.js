import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as skillsActions from '../../actions/skills/skillsActions';
import RenderForm from '../../components/SkillsForm/Form';

const mapStatetToProps = (state) => {
  return {
    appState: state.stateData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(skillsActions), dispatch),
  };
};

const Form = connect(mapStatetToProps, mapDispatchToProps)(RenderForm);

export default Form;

// export default reduxForm({ form: 'skillForm', validate: formValidator })(Form); 
