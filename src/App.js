import './App.css';

import MainContent from './components/mainContent/MainContent';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div id="form-div"></div>
      <div id="preview-div">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
