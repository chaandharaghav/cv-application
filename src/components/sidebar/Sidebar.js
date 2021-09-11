import react from 'react';

import './Sidebar.css';

import DisplayPicture from '../DisplayPicture';
import SidebarSection from './SidebarSection';

class Sidebar extends react.Component {
  render() {
    return (
      <div id="sidebar">
        <DisplayPicture
          url="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
          alt="cat image"
        />
        <SidebarSection heading="CONTACT ME AT" />
        <SidebarSection heading="SKILLS" />
        <SidebarSection heading="ACHIEVEMENTS" />
      </div>
    );
  }
}

export default Sidebar;
