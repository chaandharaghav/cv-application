import react from 'react';

// importing styles
import '../../styles/DisplayPicture.css';

class DisplayPicture extends react.Component {
  render() {
    return (
      <img src={this.props.url} alt={this.props.alt} id="display-picture" />
    );
  }
}

export default DisplayPicture;
