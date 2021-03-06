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
        <div className="form-section">
          <h2>{this.props.title}</h2>
          {this.props.details.map((contact) => (
            <SectionItemForm
              title={capitalize(contact.type)}
              value={contact['value']}
              id={contact.id}
              key={contact.id}
              onChange={this.props.onContactChange}
            />
          ))}
        </div>
      );
    } else if (this.props.title === 'Skills') {
      return (
        <div className="form-section">
          <h2>Skills</h2>
          {this.props.details.map((skill) => (
            <div key={skill.id} className="skill-div">
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
              <button
                className="remove-item-button"
                id={skill.id}
                onClick={this.props.deleteSkillEntry}
              >
                Remove item
              </button>
            </div>
          ))}
          <button
            className="add-item-button"
            onClick={this.props.addNewSkillEntry}
          >
            Add skill
          </button>
        </div>
      );
    } else {
      return (
        <div className="form-section">
          <h2>{this.props.title}</h2>
          <ul>
            {this.props.details.map((award) => (
              <li key={award.id}>
                <SectionItemForm
                  title="Achievement"
                  value={award.text}
                  id={award.id}
                  key={award.id}
                  onChange={this.props.onAchievementChange}
                  deleteAwardEntry={this.props.deleteAwardEntry}
                />
              </li>
            ))}
          </ul>
          <button
            className="add-item-button"
            onClick={this.props.addNewAwardEntry}
          >
            Add award
          </button>
        </div>
      );
    }
  }
}

export default SidebarSectionForm;
