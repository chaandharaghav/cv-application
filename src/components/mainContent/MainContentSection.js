import react from 'react';

// importing styles
import '../../styles/MainContentSection.css';
import MainSectionEntry from './MainSectionEntry';

class MainContentSection extends react.Component {
  render() {
    return (
      <div className="main-content-section">
        <h2>{this.props.heading}</h2>
        <MainSectionEntry
          role="Project manager"
          location="Cherille builders"
          duration="Jan 2008 - July 2015"
        />
      </div>
    );
  }
}

export default MainContentSection;
