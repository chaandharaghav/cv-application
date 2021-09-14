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
      valueName = 'name';
      title = 'Skill';
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
