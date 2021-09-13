import react from 'react';
import SectionHeading from './SectionHeading';
import SectionItem from './SectionItem';

// importing styles
import '../../styles/SidebarSection.css';

class SidebarSection extends react.Component {
  render() {
    let sectionItems = null;

    if (this.props.name === 'contact') {
      sectionItems = this.props.details.map((contact) => (
        <SectionItem
          itemName={contact.type}
          itemValue={contact.value}
          key={contact.id}
        />
      ));
    } else if (this.props.name === 'skills') {
      sectionItems = this.props.details.map((skill) => (
        <SectionItem
          itemName={`proficiency${skill.level}`}
          itemValue={skill.name}
          key={skill.id}
        />
      ));
    } else if (this.props.name === 'achievements') {
      sectionItems = this.props.details.map((achievement) => (
        <SectionItem
          itemName={'achievement'}
          itemValue={achievement.text}
          key={achievement.id}
        />
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
