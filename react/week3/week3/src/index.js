import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import List from './List';

function getTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json());
}

class App extends React.Component {

  state = {
    items: [],
    requestState: 'loading'
  };
  counter = 11;
  addItem = newItemInfo => {
    let newItem = {
      title: newItemInfo.descriptionValue,
      date: newItemInfo.dateValue,
      id: this.counter,
      completed: false
    };
    this.counter += 1;
    let newItems = this.state.items.concat(newItem);
    this.setState({items: newItems})
  };
  updateTitle = (id, editTitle) => {
    let newTitle = this.state.items.map(item => {
      if (id === item.id) {
        item.title = editTitle
        return item;
      }
      return item;
    });
    this.setState({items: newTitle})
  }
  deleteItem = itemId => {
    let filteredItem = this.state.items.filter(item => item.id !== itemId);
    this.setState({items: filteredItem});
  };
  toggleItem = itemId => {
    let toggledItems = this.state.items.map(item => {
      if (item.id === itemId) {
        item.completed = !item.completed;
        return item;
      } else
        return item;
      }
    );
    return this.setState({items: toggledItems});
  }
  componentDidMount() {
    getTodos().then(body => this.setState({
      items: body.slice(0, 10),
      requestState: "done"
    }));
  }
  render() {
    let {items, requestState} = this.state;
    return (< div > <Header addItem={this.addItem
}/>
      {
      requestState === 'loading'
        ? (< p > Loading ... < /p>) : ( <
          List
          items = {
            items
          }
          toggleItem = {
            this.toggleItem
          }
          deleteItem = {
            this.deleteItem
          }
          editItem = {
            this.editItem
          }
          updateTitle = {
            this.updateTitle
          }
          / >)
    } < /div >);
  }
};


ReactDOM.render( < App / >, document.getElementById("root"));
