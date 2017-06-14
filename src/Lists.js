/**
 * Created by sophia on 6/13/17.
 */
import React from 'react';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      key: ''
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
  render() {

    var listNames = this.props.lists.map((list, id) => {
      return (
        <div onMouseEnter={this.getOnMouseEnter(id)} onMouseLeave={this.onMouseLeave}>
          <div className="row listName" key={id}>{list.name}</div>
          { this.state.key === id ?
            <div>
              <button className="btn btn-default">Edit List</button>
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
          <button type="button" className="btn btn-default"><span className="addSign">+</span>Add List</button>
        </div>
      </div>
    )
  }
}

export default Lists;