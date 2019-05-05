import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Listing extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div className="dolist">
        <ul>Todo List :</ul>
        <li>task: {list.do} <br/>
            date: {list.date}</li>
      </div>
    );
  }
}

class ListRendering extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
            lists: [{do: "Get out of bed",
               date: "Wed Sep 13 2017"},
              {do: "Brush teeth",
               date: "Thu Sep 14 2017"},
              {do: "Eat breakfast",
               date: "Fri Sep 15 2017"}]

    }};
  render() {
    const { lists }  = this.state;
    return (
      <div>
        <h1>Hello World</h1>
        {lists.length > 0 ? (lists.map(list => <Listing list={list}/>)) : <p>nothing to do</p>}
      </div>
    );
  }
}

ReactDOM.render(<ListRendering />, document.getElementById('root'));
