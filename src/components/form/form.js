import react from 'react';
import HeaderForm from './HeaderForm';

class Form extends react.Component {
  render() {
    return (
      <HeaderForm
        onNameChange={this.props.onNameChange}
        onCurrentRoleChange={this.props.onCurrentRoleChange}
        name={this.props.details.name}
        currentRole={this.props.details['current-role']}
      />
    );
  }
}

export default Form;
