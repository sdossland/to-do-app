/**
 * Created by sophia on 6/14/17.
 */
import React from 'react';

const initialState = ({
  id: Number(),
  name: '',
  items: []
});

class ListModal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = props.list ? Object.assign({}, props.list) : Object.assign({}, initialState);
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
  handleSave = (e) => {
    console.log(this.props);
    e.preventDefault();
    var newList = {
      id: this.props.list.id,
      name: this.state.name,
      items: this.state.items
    };
    //this.props.addNewList(newList);
    this.props.editList(newList);
    this.props.closeModal();
  };
  render() {
    console.log(this.props)
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
            <button className="btn btn-default" onClick={this.handleSave}>Save</button>
            <button className="btn btn-default" onClick={this.props.closeModal}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ListModal;