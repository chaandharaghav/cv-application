import react from 'react';

// importing scripts
import Header from './Header';

class MainContent extends react.Component {
  render() {
    return (
      <div id="main-content">
        <Header name="Olivia Wilson" role="IT PROJECT MANAGER" />
      </div>
    );
  }
}

export default MainContent;
