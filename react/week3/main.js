import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import List from './List';

function getTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json());
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    items: [],
    requestState: 'loading'
  };
  counter = 1;
  addItem(newItemDescription) {
    let newItem = {
      title: newItemDescription,
      id: this.counter,
      completed: false
    };
    this.counter++;
    let newItems = this.state.items.concat(newItem);
  };
  deleteItem(itemId) {
    let filteredItem = this.state.items.filter(item => item.id !== itemId);
    this.setState({items: filteredItem});
  };
  toggleItem(itemId) {
    let toggledItems = this.state.items.map(item => {
      if (item.id = itemId) {
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
    return (< div > <Header addItem = {
      this.addItem
    } /> {
      requestState === loading
        ? (< p > Loading ... < /p>
        ) : ( <
          List items = {
            items
          }
          toggleItem = {
            this.toggleItem
          }
          deleteItem = {
            this.deleteItem
          }
        )
      } <
      /diV >);
    }};
