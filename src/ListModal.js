/**
 * Created by sophia on 6/14/17.
 */
import React from 'react';

const initialState = ({
  id: Number(),
  name: '',
  tasks: [],
  newTask: ''
});

class ListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.list ? Object.assign({}, props.list, {newTask: '', hover: false, hoverIndex: ''}) : Object.assign({}, initialState);
  }
  getOnMouseEnter = (hoverIndex) =>
    () => {
      this.setState({
        hover: true,
        hoverIndex
      })
  };
  getOnMouseLeave = () => {
    this.setState({
      hover: false
    })
  }
  getOnChangeName = (key) => (e) => {
    this.setState({
      [key]: e.target.value
    });
  };
  toggleCheckBox = (key) => () => {
    var tasks = this.state.tasks.slice();
    tasks[key].checked = !tasks[key].checked;
    this.setState({ tasks });
  };
  getOnChangeTasks = (key) => (e) => {
    var tasks = this.state.tasks.slice();
    tasks[key] = e.target.value;
    this.setState({ tasks });
  };
  getOnChangeNewTask = (e) => {
    this.setState({
      newTask: e.target.value
    });
  };
  addNewTask = (e) => {
    var tasks = this.state.tasks.slice();
    var newTask = { task: e.target.value, checked: false };
    if (e.key === 'Enter') {
      tasks.push(newTask);
      this.setState({
        tasks,
        newTask: ''
      });
    }
  };
  deleteTask = (index) => () => {
    var tasks = this.state.tasks.slice();
    tasks.splice(index, 1);
    this.setState({ tasks });
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
      id: this.props.list ? this.props.list.id : this.props.lists.length,
      name: this.state.name,
      tasks: this.state.tasks
    };
    this.props.list ? this.props.editList(newList) : this.props.addNewList(newList);

    this.props.closeModal();
  };
  render() {
    var tasks = this.state.tasks.map((task, index) => {
      return (
        <div className="row taskName" key={index} onMouseEnter={this.getOnMouseEnter(index)} onMouseLeave={this.getOnMouseLeave} >
          <input className="checkBox" type="checkbox" checked={task.checked} onChange={this.toggleCheckBox(index)} />
          <input className="modal-task" type="text" value={task.task} onChange={this.getOnChangeTasks(index)} />
          { this.state.hoverIndex === index && this.state.hover ?
            <div className="editDeleteRow">
              <button className="btn btn-default center-btn" onClick={this.deleteTask(index)}>Delete</button>
            </div> : null
          }
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
            <input className="modal-task" type="text" placeholder="Add new task" value={this.state.newTask} onChange={this.getOnChangeNewTask} onKeyPress={this.addNewTask} />
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