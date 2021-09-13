import react from 'react';

// importing styles
import '../../styles/Sidebar.css';

import DisplayPicture from './DisplayPicture';
import SidebarSection from './SidebarSection';

class Sidebar extends react.Component {
  render() {
    return (
      <div id="sidebar">
        <DisplayPicture
          url="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
          alt="cat image"
        />
        <SidebarSection
          heading="CONTACT ME AT"
          name="contact"
          details={this.props.contact}
        />
        <SidebarSection
          heading="SKILLS"
          name="skills"
          details={this.props.skills}
        />
        <SidebarSection
          heading="ACHIEVEMENTS"
          name="achievements"
          details={this.props.achievements}
        />
      </div>
    );
  }
}

export default Sidebar;
