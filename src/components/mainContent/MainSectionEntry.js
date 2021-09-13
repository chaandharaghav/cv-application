import react from 'react';

// importing components
import RoleHeader from './RoleHeader';

// importing styles
import '../../styles/MainSectionEntry.css';

class MainSectionEntry extends react.Component {
  render() {
    return (
      <div className="main-section-entry">
        <RoleHeader
          role={this.props.role}
          location={this.props.location}
          duration={this.props.duration}
        />
        <ul>
          {this.props.responsibilities.map((responsibility) => (
            <li>{responsibility}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MainSectionEntry;
