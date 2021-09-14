import react from 'react';
import SidebarSectionForm from './SidebarSectionForm';

class SidebarForm extends react.Component {
  render() {
    return (
      <div>
        <SidebarSectionForm
          title="Contact"
          details={this.props.contact}
          onContactChange={this.props.onContactChange}
        />
        <SidebarSectionForm
          title="Skills"
          details={this.props.skills}
          onSkillChange={this.props.onSkillChange}
          onProficiencyChange={this.props.onProficiencyChange}
        />
        <SidebarSectionForm
          title="Achievements"
          details={this.props.achievements}
        />
      </div>
    );
  }
}

export default SidebarForm;
