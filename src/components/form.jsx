import React, { Component } from "react";

class Form extends Component {
  name = React.createRef();
  color = React.createRef();
  render() {
    return (
      <div className="form">
        <div>
          <label htmlFor="yourName">Your name:</label>
          <input
            type="text"
            ref={this.name}
            name=""
            id="yourName"
            onChange={event => {
              const name = this.name.current.value;
              this.props.onChangeName(name);
            }}
          />
        </div>
        <div>
          <label htmlFor="color">Choose color:</label>
          <select
            name=""
            ref={this.color}
            id="color"
            className="styled-select slate"
            onChange={event => {
              const selected = this.color.current.value;
              this.props.onChangeSelected(selected);
            }}
          >
            <option value="0">Green</option>
            <option value="1">Red</option>
            <option value="2">Blue</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Form;
