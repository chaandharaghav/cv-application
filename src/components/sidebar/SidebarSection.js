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
          itemValue="chaandharaghav.cb19@bitsathy.ac.in"
        />
        <SectionItem itemName="instagram" itemValue="@chaandharaghav" />
      </div>
    );
  }
}

export default SidebarSection;
