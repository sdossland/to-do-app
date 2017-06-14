/**
 * Created by sophia on 6/14/17.
 */
import React from 'react';

class ListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      items: []
    }
  }
  getOnChange = (key) => (e) => {
    this.setState({
      [key]: e.target.value
    });
  };
  handleOutsideClick = (e) => {
    // e.preventDefault();
    if (e.target.id === 'list-modal') {
      this.props.closeModal();
    }
  };
  render() {
    return (
      <div id="list-modal" className="modal" style={{ display: this.props.showModal ? 'block' : 'none' }} onClick={this.handleOutsideClick}>
        <div className="modal-content">
          <div className="closeModal" onClick={this.props.closeModal}>X</div>
          <div className="row">
            <input className="modal-title" type="text" placeholder="Please enter name of list" value={this.state.name} onChange={this.getOnChange('name')} required />
          </div>
          <hr />
          <div className="row">
            <input className="modal-task" type="text" placeholder="Enter new task" value={this.state.items} onChange={this.getOnChange('items')}/>
          </div>
          <div className="row saveCloseBtns">
            <button className="btn btn-default" /*onClick={this.saveList}*/>Save</button>
            <button className="btn btn-default" onClick={this.props.closeModal}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ListModal;