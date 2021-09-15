import react from 'react';

class SidebarItemForm extends react.Component {
  render() {
    if (this.props.title === 'Achievement') {
      return (
        <div className="form-wrapper">
          <label htmlFor="">{this.props.title}</label>
          <input
            id={this.props.id}
            type="text"
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <button
            className="remove-item-button"
            id={this.props.id}
            onClick={this.props.deleteAwardEntry}
          >
            Remove item
          </button>
        </div>
      );
    } else {
      return (
        <div className="form-wrapper">
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
}

export default SidebarItemForm;
