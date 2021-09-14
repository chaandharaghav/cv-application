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
    let valueName = null;
    let title = null;

    if (this.props.title === 'Contact') {
      valueName = 'value';
    } else if (this.props.title === 'Skills') {
      return (
        <div>
          <h2>Skills</h2>
          {this.props.details.map((skill) => (
            <div>
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
      valueName = 'text';
      title = 'Award';
    }

    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {this.props.details.map((item) => (
            <SectionItemForm
              title={capitalize(item.type) || title}
              value={item[valueName]}
              id={item.id}
              key={item.id}
              onContactChange={this.props.onContactChange}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default SidebarSectionForm;
