import React from 'react';

class Header extends React.Component {
  state = {
    inputValue: ''
  };
  onChangeHandler(vlaue) {
    let newValue = value.target.value;
    this.setState({
      inputValue: newValue
    });
  }
  clickHandler() {
    let inputValue = this.state.inputValue;
    this.setState({
      inputValue: ''
    });
    this.props.addItem(inputValue);
  }
  render() {
    return ( < div >
      <
      input placeholder = 'add somthing'
      value = {
        inputValue
      }
      onChange = {
        this.onChangeHandler
      }
      /> <
      bottom onClick = {
        this.clickHandler
      } > ADD < /bottom> < /
      div > )
  }
};

export default Header;
