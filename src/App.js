import React, { Component } from 'react';
import _ from 'lodash';
import Lists from './Lists';
import './App.css';

var lists = [{
  id: 0,
  name: 'Personal',
  items: ['vacuum', 'meal prep', 'clean kitchen', 'laundry', 'work out']
}, {
  id: 1,
  name: 'Shopping',
  items: ['oranges', 'lemons', 'apples', 'kale', 'celery', 'cucumber', 'ginger', 'tea', 'sparkling water', 'laundry detergent', 'shampoo and conditioner']
}, {
  id: 2,
  name: 'Work',
  items: ['fix slider bounds logic', 'add \'type\' to listings page', 'fix contact edit buy']
}];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists
    }
  }
  editList = (newList) => {
    var lists = this.state.lists.slice();
    var key = _.findIndex(lists, function(list) { return list.id === newList.id;});
    console.log(lists);
    console.log(key);
    console.log(newList);
    lists[key] = newList;
    this.setState({ lists })
  };
  deleteList = (key) => {
    var lists = this.state.lists.slice();
    lists.splice(key, 1);
    this.setState({ lists })
  };
  addNewList = (newList) => {
    var lists = this.state.lists.slice();
    lists.push(newList);
    this.setState({ lists })
  };
  render() {
    return (
      <div className="container-fluid">
        <Lists lists={this.state.lists} editList={this.editList} deleteList={this.deleteList} addNewList={this.addNewList} />
        {/*<div className="app-intro">*/}
          {/*<div className="row">*/}
            {/*<p className="app-directions">Click to get started.</p>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default App;
