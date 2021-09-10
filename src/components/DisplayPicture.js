import react from 'react';

class DisplayPicture extends react.Component {
  render() {
    return (
      <img src={this.props.url} alt={this.props.alt} id="display-picture" />
    );
  }
}

export default DisplayPicture;
