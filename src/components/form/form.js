import react from 'react';
import HeaderForm from './HeaderForm';
import MainContentSectionForm from './MainContentSectionForm';
import SidebarForm from './SidebarForm';

class Form extends react.Component {
  render() {
    return (
      <div id="form-div">
        <HeaderForm
          onNameChange={this.props.onNameChange}
          onCurrentRoleChange={this.props.onCurrentRoleChange}
          name={this.props.details.name}
          currentRole={this.props.details['current-role']}
        />
        <MainContentSectionForm
          title="Work Experience"
          work-experience={this.props.details['work-experience']}
          onPropertyChange={this.props.onPropertyChange}
          onResponsibilityChange={this.props.onResponsibilityChange}
        />
        <MainContentSectionForm
          title="Educational History"
          work-experience={this.props.details.education}
          onPropertyChange={this.props.onPropertyChange}
          onResponsibilityChange={this.props.onResponsibilityChange}
        />
        <SidebarForm
          contact={this.props.details.contact}
          skills={this.props.details.skills}
          achievements={this.props.details.awards}
          onContactChange={this.props.onContactChange}
          onSkillChange={this.props.onSkillChange}
          onProficiencyChange={this.props.onProficiencyChange}
        />
      </div>
    );
  }
}

export default Form;
