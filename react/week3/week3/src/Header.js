import React from "react";

class Header extends React.Component {
  state = {
    inputValue: {
      descriptionValue: "",
      dateValue: ""
    }
  };
  onChangeHandler = valueColecter => value => {
    // let newValue = value.target.value;
    // let newInputs = this.state.inputValue[valueColecter];
    // this.setState({inputValue: {[newInputs]: newValue}});
    let { inputValue } = this.state;
    let newInputs = {
      ...inputValue,
      [valueColecter]: value.target.value
    };
    this.setState({ inputValue: newInputs });
    // console.log(newInputs);
  };
  clickHandler = (e) => {
    e.preventDefault()
    let inputValue = this.state.inputValue;
    // console.log(inputValue.descriptionValue);
    this.setState({
      inputValue: {
        descriptionValue: "",
        dateValue: ""
      }
    });
    this.props.addItem(inputValue);
  };
  render() {
    let {
      inputValue: { descriptionValue, dateValue }
    } = this.state;
    return (
      <div>
        {" "}
        <form>
          <label>
            descrip what todo{" "}
            <input
              id="des"
              placeholder="add description"
              onChange={this.onChangeHandler("descriptionValue")}
              value={descriptionValue}
            />
          </label>{" "}
          <label>
            , do it at this date{" "}
            <input
              id="dat"
              placeholder="add date"
              onChange={this.onChangeHandler("dateValue")}
              value={dateValue}
            />{" "}
          </label>
          <button onClick={this.clickHandler}>ADD </button>
        </form>{" "}
      </div>
    );
  }
}

export default Header;
