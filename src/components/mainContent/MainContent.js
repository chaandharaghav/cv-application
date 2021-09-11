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
        <Header name="Olivia Wilson" role="IT PROJECT MANAGER" />
        <MainContentSection heading="WORK EXPERIENCE" />
        <MainContentSection heading="WORK EXPERIENCE" />
      </div>
    );
  }
}

export default MainContent;
