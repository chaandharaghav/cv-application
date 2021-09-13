import react from 'react';
import SectionHeading from './SectionHeading';
import SectionItem from './SectionItem';

// importing styles
import '../../styles/SidebarSection.css';

class SidebarSection extends react.Component {
  render() {
    let sectionItems = null;

    if (this.props.name === 'contact') {
      const propertyNames = Object.keys(this.props.details);
      const contactDetails = this.props.details;
      sectionItems = propertyNames.map((propertyName) => (
        <SectionItem
          itemName={propertyName}
          itemValue={contactDetails[propertyName]}
        />
      ));
    } else if (this.props.name === 'skills') {
      sectionItems = this.props.details.map((skill) => (
        <SectionItem
          itemName={`proficiency${skill.level}`}
          itemValue={skill.name}
        />
      ));
    } else if (this.props.name === 'achievements') {
      sectionItems = this.props.details.map((achievement) => (
        <SectionItem itemName={'achievement'} itemValue={achievement} />
      ));
    }
    return (
      <div className="sidebar-section">
        <SectionHeading text={this.props.heading} />
        {sectionItems}
      </div>
    );
  }
}

export default SidebarSection;
