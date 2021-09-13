import react from 'react';

// importing styles
import '../../styles/SectionItem.css';

// importing fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faMapMarker,
  faLaptop,
  faTrophy,
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

function getEmoji(itemName) {
  const emojiMatch = {
    email: faEnvelope,
    address: faMapMarker,
    website: faLaptop,
    linkedin: faLinkedin,
    instagram: faInstagram,
    facebook: faFacebook,
    achievement: faTrophy,
    proficiency1: faDiceOne,
    proficiency2: faDiceTwo,
    proficiency3: faDiceThree,
    proficiency4: faDiceFour,
    proficiency5: faDiceFive,
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
