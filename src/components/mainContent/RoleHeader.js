import react from 'react';

class RoleHeader extends react.Component {
  render() {
    return (
      <div className="role-header">
        <div className="role">{this.props.role}</div>
        <div className="position">{`${this.props.location} | ${this.props.duration}`}</div>
      </div>
    );
  }
}

export default RoleHeader;
