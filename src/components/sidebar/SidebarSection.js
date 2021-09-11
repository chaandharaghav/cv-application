import react from 'react';
import SectionHeading from './SectionHeading';
import SectionItem from './SectionItem';

// importing styles
import '../../styles/SidebarSection.css';

class SidebarSection extends react.Component {
  render() {
    return (
      <div className="sidebar-section">
        <SectionHeading text={this.props.heading} />
        <SectionItem
          itemName="address"
          itemValue="52/23, Lincoln street, Texas, Unites States of America - 624834"
        />
        <SectionItem
          itemName="mail"
          itemValue="big.ass.email@&#8203;address-is&#8203;.extremely.lame.de"
        />
        <SectionItem itemName="instagram" itemValue="@chaandharaghav" />
      </div>
    );
  }
}

export default SidebarSection;
