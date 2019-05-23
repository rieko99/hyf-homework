import React from "react";

class List extends React.Component {
  render() {
    const {items, deleteItem, toggleItem, updateTitle} = this.props;
    return (<div>
      {" "}
      <ul>
        {" "}
        {
          items.length > 0
            ? (items.map(item => (<Item key={item.id} item={item} deleteItem={deleteItem} toggleItem={toggleItem} updateTitle={updateTitle}/>)))
            : (<li>
              No thing to do , add some ^
            </li>)
        }{" "}
      </ul>{" "}
    </div>);
  }
}

class Item extends React.Component {
  state = {
    readyToEdit: true,
    editedValue: ''
  };
  editItem = () => {
    this.setState({readyToEdit: false});
  };
  cancelChange = () => {
    this.setState({readyToEdit: true});
  };
  changeHandler = e => {
    let newValue = e.target.value;
    this.setState({editedValue: newValue})
  };
  saveChange = () => {
    let newTitle = this.state.editedValue;
  }
  render() {
    const {item, deleteItem, toggleItem, updateTitle} = this.props;
    let trueValue = item.title + " ,do it at this date " + item.date;
    if (this.state.readyToEdit) {
      return (<li>
        <input type="checkbox" checked={item.completed} onChange={() => toggleItem(item.id)}/>{" "}
        <span onClick={() => toggleItem(item.id)} className={item.completed
            ? "item--checked"
            : ""}>
          {" "}
          {trueValue}{" "}
        </span>{" "}
        <button onClick={this.editItem}>
          EDIT
        </button>{" "}
        <button onClick={() => deleteItem(item.id)}>
          X
        </button>{" "}
      </li>);
    } else {
      return (<li>
        {" "}
        <input type="checkbox" checked={item.completed} onChange={() => toggleItem(item.id)}/>{" "}
        <input type="text" onClick={() => toggleItem(item.id)} className={item.completed
            ? "item--checked"
            : ""} value={this.state.editedValue || item.title} onChange={this.changeHandler}/>{" "}
        <button onClick={() => {
            updateTitle(item.id, this.state.editedValue);
            this.setState({readyToEdit: true})
          }}>
          SAVE
        </button>{" "}
        <button onClick={this.cancelChange}>
          CANCEL
        </button>{" "}
        <button onClick={() => deleteItem(item.id)}>
          X
        </button>{" "}
      </li>);
    }
  }
}

export default List;
