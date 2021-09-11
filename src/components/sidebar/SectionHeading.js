import react from 'react';

// importing styles
import '../../styles/SectionHeading.css';

class SectionHeading extends react.Component {
  render() {
    return <h2 className="sidebar-heading">{this.props.text}</h2>;
  }
}

export default SectionHeading;
