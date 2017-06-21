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
      hoverIndex: '',
      showModal: false,
    };
  };
  getOnMouseEnter = (hoverIndex) =>
    () => {
      this.setState({
        hover: true,
        hoverIndex
      })
  };
  onMouseLeave = () => {
    this.setState({ hover: false })
  };
  getOpenModal = index => () => {
    this.setState({
      showModal: true,
      key: index
    });
  };
  openModal = () => {
    this.setState({
      showModal: true
    })
  };
  closeModal = () => {
    // e.preventDefault();
    this.setState({
      showModal: false,
      hoverIndex: false,
      key: '' //reset key so you can add new list after already opened an existing list
    })
  };
  handleDelete = (index) => () => {
    this.props.deleteList(index);
  };
  render() {
    var listNames = this.props.lists.map((list, index) => {
      return (
        <div className="row" key={index} onMouseEnter={this.getOnMouseEnter(index)} onMouseLeave={this.onMouseLeave}>
          <div className="listName" onClick={this.getOpenModal(index)}>{list.name}</div>
          { this.state.hoverIndex === index && this.state.hover ?
            <div className="editDeleteRow">
              <button className="btn btn-default center-btn" onClick={this.getOpenModal(index)}>Edit List</button>
              <button className="btn btn-default center-btn" onClick={this.handleDelete(index)}>Delete List</button>
            </div>
          : null }
        </div>
      )
    });
    return (
      <div>
        <div id='list-summary-active' className="col-md-4 col-md-offset-4 col-xs-12">
          <div className="row">
            <p className="title">my WILL DO lists</p>
          </div>
          <div>
            {listNames}
          </div>
          <div className="row">
            <button type="button" className="btn btn-default" onClick={this.openModal}><span className="addSign">+</span>Add List</button>
          </div>
          </div>
        { this.state.showModal && <ListModal showModal={this.state.showModal}
                                             closeModal={this.closeModal}
                                             list={this.props.lists[this.state.key]}
                                             lists={this.props.lists}
                                             editList={this.props.editList}
                                             addNewList={this.props.addNewList}
        /> }
      </div>
    )
  }
}

export default Lists;