import React, { Component } from 'react';
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
      lists: [],
      loaded: false
    }
  }
  componentDidMount() {
    this.setState({
      lists: lists,
      loaded: true
    })
  }
  render() {
    return this.state.loaded ? (
      <div className="container-fluid">
        <Lists lists={this.state.lists} />
        {/*<div className="app-intro">*/}

          {/*<div className="row">*/}
            {/*<p className="app-directions">Click to get started.</p>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    ) : <div>Loading...</div>
  }
}

export default App;
