import React, { Component } from 'react';
import _ from 'lodash';
import Lists from './Lists';
import './App.css';

var lists = [{
  id: 0,
  name: 'Personal',
  tasks: [{task: 'vacuum', checked: false}, {task: 'meal prep', checked: false}, {task: 'clean kitchen', checked: false}, {task: 'laundry', checked: false}, {task: 'work out', checked: false}]
}, {
  id: 1,
  name: 'Shopping',
  tasks: [{task: 'oranges', checked: false}, {task: 'lemons', checked: false}, {task: 'apples', checked: false}, {task: 'kale', checked: false}, {task: 'celery', checked: false}, {task: 'cucumber', checked: false}, {task: 'ginger', checked: false}, {task: 'tea', checked: false}, {task: 'sparkling water', checked: false}, {task: 'laundry detergent', checked: false}, {task: 'shampoo and conditioner', checked: false}]
}, {
  id: 2,
  name: 'Work',
  tasks: [{task: 'fix slider bounds logic', checked: false}, {task: 'add \'type\' to listings page', checked: false}, {task: 'fix contact edit buy', checked: false}]
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
