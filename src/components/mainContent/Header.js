import react from 'react';

// importing  styles
import '../../styles/Header.css';

class Header extends react.Component {
  render() {
    return (
      <div id="header">
        <p id="name">{this.props.name}</p>
        <hr className="small-hr" />
        <p id="role">{this.props.role}</p>
      </div>
    );
  }
}

export default Header;
