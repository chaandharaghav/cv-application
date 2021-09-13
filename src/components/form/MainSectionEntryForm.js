import react from 'react';

class MainSectionEntryForm extends react.Component {
  render() {
    return (
      <div className="main-section-entry-form">
        <div className="form-wrapper">
          <label htmlFor="">Role</label>
          <input type="text" value={this.props['work-experience'].role} />
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Location</label>
          <input type="text" value={this.props['work-experience'].location} />
        </div>
        <div className="form-wrapper">
          <label htmlFor="">Duration</label>
          <input type="text" value={this.props['work-experience'].duration} />
        </div>
        {/* {this.props['work-experience'].responsibilities.map(
          (responsibility) => (
            <textarea>{responsibility}</textarea>
          ),
        )} */}
      </div>
    );
  }
}

export default MainSectionEntryForm;
