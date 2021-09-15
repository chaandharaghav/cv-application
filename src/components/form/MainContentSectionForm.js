import react from 'react';
import MainSectionEntryForm from './MainSectionEntryForm';

class MainContentSectionForm extends react.Component {
  render() {
    return (
      <div className="form-section">
        <h2>{this.props.title}</h2>
        {this.props['work-experience'].map((experience) => (
          <MainSectionEntryForm
            work-experience={experience}
            key={experience.id}
            id={experience.id}
            onPropertyChange={this.props.onPropertyChange}
            onResponsibilityChange={this.props.onResponsibilityChange}
            deleteEntry={this.props.deleteEntry}
          />
        ))}

        <button
          className="add-item-button"
          onClick={this.props.addNewEntry}
        >{`Add ${
          this.props.title === 'Work Experience' ? 'experience' : 'education'
        }`}</button>
      </div>
    );
  }
}

export default MainContentSectionForm;
