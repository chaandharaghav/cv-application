import react from 'react';

// importing components
import Header from './Header';
import MainContentSection from './MainContentSection';

// importing styles
import '../../styles/MainContent.css';

class MainContent extends react.Component {
  render() {
    return (
      <div id="main-content">
        <Header name={this.props.name} role={this.props.role} />
        <MainContentSection
          heading="WORK EXPERIENCE"
          experience-details={this.props['work-experience']}
        />
        <MainContentSection
          heading="EDUCATIONAL HISTORY"
          experience-details={this.props.education}
        />
      </div>
    );
  }
}

export default MainContent;
