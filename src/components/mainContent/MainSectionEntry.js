import react from 'react';

// importing components
import RoleHeader from './RoleHeader';

class MainSectionEntry extends react.Component {
  render() {
    return (
      <div>
        <RoleHeader
          role={this.props.role}
          location={this.props.location}
          duration={this.props.duration}
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

export default MainSectionEntry;
