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
          addNewSkillEntry={this.props.addNewSkillEntry}
          deleteSkillEntry={this.props.deleteSkillEntry}
        />
        <SidebarSectionForm
          title="Achievements"
          details={this.props.achievements}
          onAchievementChange={this.props.onAchievementChange}
        />
      </div>
    );
  }
}

export default SidebarForm;
