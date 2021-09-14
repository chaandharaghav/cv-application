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
        <SidebarSectionForm title="Skills" details={this.props.skills} />
        <SidebarSectionForm
          title="Achievements"
          details={this.props.achievements}
        />
      </div>
    );
  }
}

export default SidebarForm;
