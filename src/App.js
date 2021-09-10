import './App.css';

import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div id="form-div"></div>
      <div id="preview-div">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
