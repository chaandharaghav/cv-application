import react from 'react';

class MainSectionEntryForm extends react.Component {
  render() {
    return (
      <div className="main-section-entry-form">
        <div>
          <div className="form-wrapper">
            <label htmlFor="">Role</label>
            <input
              type="text"
              value={this.props['work-experience'].role}
              id={this.props.id}
              onChange={this.props.onPropertyChange}
            />
          </div>
          <div className="form-wrapper">
            <label htmlFor="">Location</label>
            <input
              type="text"
              value={this.props['work-experience'].location}
              id={this.props.id}
              onChange={this.props.onPropertyChange}
            />
          </div>
          <div className="form-wrapper">
            <label htmlFor="">Duration</label>
            <input
              type="text"
              value={this.props['work-experience'].duration}
              id={this.props.id}
              onChange={this.props.onPropertyChange}
            />
          </div>
          <p>Responsibilities</p>
          <ul>
            {this.props['work-experience'].responsibilities.map(
              (responsibility) => (
                <li key={responsibility.id}>
                  <div className="form-wrapper" key={responsibility.id}>
                    <input
                      type="text"
                      value={responsibility.text}
                      id={responsibility.id}
                      onChange={this.props.onResponsibilityChange}
                    />
                  </div>
                </li>
              ),
            )}
          </ul>
          <div>
            <button
              className="remove-experience-button"
              id={this.props.id}
              onClick={this.props.deleteEntry}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSectionEntryForm;
