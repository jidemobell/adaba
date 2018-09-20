import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as skillsActions from '../../actions/skills/skillsActions';

import SkillApp from '../../components/SkillsPage/App';


const mapStatetToProps = (state) => {
  return {
    skillsArray: state.stateData.skills,
    formValues: state.form.skillForm,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(skillsActions), dispatch),
  };
};

const App = connect(mapStatetToProps, mapDispatchToProps)(SkillApp);

export default App;
