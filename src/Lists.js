/**
 * Created by sophia on 6/13/17.
 */
import React from 'react';
import ListModal from './ListModal';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      key: '',
      showModal: false
    }
  };
  getOnMouseEnter = (key) =>
    () => {
      this.setState({
        hover: true,
        key
      })
  };
  onMouseLeave = () => {
    this.setState({ hover: false, key: '' })
  };
  openModal = () => {
    this.setState({
      showModal: true
    })
  };
  closeModal = () => {
    // e.preventDefault();
    this.setState({
      showModal: false
    })
  };
  editList = () => {
    
  };
  render() {
    var listNames = this.props.lists.map((list, id) => {
      return (
        <div className="row" onMouseEnter={this.getOnMouseEnter(id)} onMouseLeave={this.onMouseLeave}>
          <div className="listName" key={id}>{list.name}</div>
          { this.state.key === id ?
            <div className="editDeleteRow">
              <button className="btn btn-default" onClick={this.editList}>Edit List</button>
              <button className="btn btn-default">Delete List</button>
            </div>
          : null }
        </div>
      )
    });
    return (
      <div>
        <div className="row">
          <p className="title">my WILL DO lists</p>
        </div>
        <div>
          {listNames}
        </div>
        <div className="row">
          <button type="button" className="btn btn-default" onClick={this.openModal}><span className="addSign">+</span>Add List</button>
        </div>
        { this.state.showModal && <ListModal showModal={this.state.showModal} closeModal={this.closeModal} /> }
      </div>
    )
  }
}

export default Lists;