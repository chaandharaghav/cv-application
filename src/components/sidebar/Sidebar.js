import react from 'react';

import './Sidebar.css';

import DisplayPicture from '../DisplayPicture';

class Sidebar extends react.Component {
  render() {
    return (
      <div id="sidebar">
        <DisplayPicture
          url="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
          alt="cat image"
        />
      </div>
    );
  }
}

export default Sidebar;
