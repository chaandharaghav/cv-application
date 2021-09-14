import react from 'react';

// importing componenets
import SectionItemForm from './SectionItemForm';

function capitalize(text) {
  if (text) {
    text = text.toLowerCase();
    return text[0].toUpperCase() + text.slice(1);
  }
}

class SidebarSectionForm extends react.Component {
  render() {
    if (this.props.title === 'Contact') {
      return (
        <div>
          <h2>{this.props.title}</h2>
          <ul>
            {this.props.details.map((contact) => (
              <SectionItemForm
                title={capitalize(contact.type)}
                value={contact['value']}
                id={contact.id}
                key={contact.id}
                onChange={this.props.onContactChange}
              />
            ))}
          </ul>
        </div>
      );
    } else if (this.props.title === 'Skills') {
      return (
        <div>
          <h2>Skills</h2>
          {this.props.details.map((skill) => (
            <div key={skill.id}>
              <div>
                <label htmlFor="">Skill</label>
                <input
                  type="text"
                  value={skill.name}
                  id={skill.id}
                  onChange={this.props.onSkillChange}
                />
              </div>
              <div>
                <label htmlFor="">Proficiency</label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={skill.level}
                  id={skill.id}
                  onChange={this.props.onProficiencyChange}
                />
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h2>{this.props.title}</h2>
          <ul>
            {this.props.details.map((award) => (
              <SectionItemForm
                title="Achievements"
                value={award.text}
                id={award.id}
                key={award.id}
                onChange={this.props.onAchievementChange}
              />
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default SidebarSectionForm;
