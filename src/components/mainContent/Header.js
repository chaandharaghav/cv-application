import react from 'react';

// importing  styles
import '../../styles/Header.css';

class Header extends react.Component {
  render() {
    return (
      <div id="header">
        <h1 id="name">{this.props.name}</h1>
        <hr className="small-hr" />
        <p id="role">{this.props.role}</p>
      </div>
    );
  }
}

export default Header;
