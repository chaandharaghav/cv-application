import react from 'react';

// importing fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMapMarker,
  faLaptop,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

function getEmoji(itemName) {
  const emojiMatch = {
    mail: faEnvelope,
    address: faMapMarker,
    website: faLaptop,
    linkedin: faLinkedin,
    instagram: faInstagram,
    facebook: faFacebook,
    achievement: faTrophy,
  };

  return <FontAwesomeIcon icon={emojiMatch[itemName]} />;
}

function getValue(value) {
  return value;
}

class SectionItem extends react.Component {
  render() {
    return (
      <div className="section-item">
        <div className="icon">{getEmoji(this.props.itemName)}</div>
        <div className="section-item-value">
          {getValue(this.props.itemValue)}
        </div>
      </div>
    );
  }
}

export default SectionItem;
