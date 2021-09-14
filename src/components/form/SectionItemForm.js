import react from 'react';

class SidebarItemForm extends react.Component {
  render() {
    return (
      <div>
        <label htmlFor="">{this.props.title}</label>
        <input
          id={this.props.id}
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default SidebarItemForm;
