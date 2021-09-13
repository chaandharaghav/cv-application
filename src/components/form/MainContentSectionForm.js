import react from 'react';
import MainSectionEntryForm from './MainSectionEntryForm';

class MainContentSectionForm extends react.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props['work-experience'].map((experience) => (
          <MainSectionEntryForm
            work-experience={experience}
            key={experience.id}
          />
        ))}
      </div>
    );
  }
}

export default MainContentSectionForm;
