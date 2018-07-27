import React, { Component } from "react";

class Background extends Component {
  render() {
    return (
      <div
        className="app"
        style={{ background: this.state.colors[this.state.selected].value }}
      >
        <Text
          name={this.state.name}
          color={this.state.colors[this.state.selected].name}
        />
        <Form
          onChangeName={this.handleNameChange}
          onChangeSelected={this.handleColorChange}
        />
      </div>
    );
  }
}

export default Background;
