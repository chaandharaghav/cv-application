import react from 'react';

// importing components
import RoleHeader from './RoleHeader';

// importing styles
import '../../styles/MainContentSection.css';

class MainContentSection extends react.Component {
  render() {
    return (
      <div className="main-content-section">
        <h2>{this.props.heading}</h2>
        <RoleHeader
          role="Project Manager"
          location="Pixelpoint Hive"
          duration="Jan 2015 - Sept 2017"
        />
        <ul>
          <li>
            Conduct day-to-day project coordination, planning, and
            implementation across multiple teams
          </li>
          <li>Create functional and technical application documents</li>
        </ul>
      </div>
    );
  }
}

export default MainContentSection;
