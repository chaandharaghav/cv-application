import react from 'react';

// importing styles
import '../../styles/MainContentSection.css';
import MainSectionEntry from './MainSectionEntry';

class MainContentSection extends react.Component {
  render() {
    return (
      <div className="main-content-section">
        <h2>{this.props.heading}</h2>
        {this.props['experience-details'].map((experience) => (
          <MainSectionEntry
            key={experience.id}
            role={experience.role}
            location={experience.location}
            duration={experience.duration}
            responsibilities={experience.responsibilities}
          />
        ))}
      </div>
    );
  }
}

export default MainContentSection;
