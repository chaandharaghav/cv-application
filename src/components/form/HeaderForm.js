import react from 'react';

class HeaderForm extends react.Component {
  render() {
    return (
      <div className="form-section">
        <h2>Personal Details</h2>
        <div className="form-wrapper">
          <label htmlFor="name-input">Name</label>
          <input
            type="text"
            id="name-input"
            value={this.props.name}
            onChange={this.props.onNameChange}
          />
        </div>
        <div className="form-wrapper">
          <label htmlFor="current-role-input">Current Role</label>
          <input
            type="text"
            id="current-role-input"
            value={this.props.currentRole}
            onChange={this.props.onCurrentRoleChange}
          />
        </div>
      </div>
    );
  }
}

export default HeaderForm;
