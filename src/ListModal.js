/**
 * Created by sophia on 6/14/17.
 */
import React from 'react';

const initialState = ({
  id: Number(),
  name: '',
  tasks: []
});

class ListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.list ? Object.assign({}, props.list) : Object.assign({}, initialState);
  }
  getOnChangeName = (key) => (e) => {
    this.setState({
      [key]: e.target.value
    });
  };
  getOnChangeTasks = (key) => (e) => {
    var tasks = this.state.tasks.slice();
    tasks[key] = e.target.value;
    this.setState({ tasks });
  };
  toggleCheckBox = (key) => () => {
    var tasks = this.state.tasks.slice();
    tasks[key].checked = !tasks[key].checked;
    this.setState({ tasks });
  };
  addNewTask = (key) => () => {
    
  };
  handleOutsideClick = (e) => {
    // e.preventDefault();
    if (e.target.id === 'list-modal') {
      this.props.closeModal();
    }
  };
  handleSave = (e) => {
    e.preventDefault();
    var newList = {
      id: this.props.list.id,
      name: this.state.name,
      tasks: this.state.tasks
    };
    //this.props.addNewList(newList);
    this.props.editList(newList);
    this.props.closeModal();
  };
  render() {
    var tasks = this.state.tasks.map((task, index) => {
      return (
        <div className="row" key={index} >
          <input className="checkBox" type="checkbox" checked={task.checked} onChange={this.toggleCheckBox(index)} />
          <input className="modal-task" type="text" value={task.task} onChange={this.getOnChangeTasks(index)} />
        </div>
      )
    });
    return (
      <div id="list-modal" className="modal" style={{ display: this.props.showModal ? 'block' : 'none' }} onClick={this.handleOutsideClick}>
        <div className="modal-content">
          <div className="closeModal" onClick={this.props.closeModal}>X</div>
          <div className="row">
            <input className="modal-title" type="text" placeholder="Please enter name of list" value={this.state.name} onChange={this.getOnChangeName('name')} required />
          </div>
          <hr />
          {tasks}
          <div className="row">
            <input className="modal-task" type="text" placeholder="Add new task" value={this.state.newTask} /*onChange={this.getOnChange('tasks')}*/ />
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