import React, { Component } from "react";
import "./App.css";
import Text from "./components/text";
import Form from "./components/form";
import Footer from "./components/footer";
class App extends Component {
  state = {
    name: "Francisco",
    selected: 0,
    colors: [
      {
        name: "Green",
        value: "#47FF2E"
      },
      {
        name: "Red",
        value: "#FF0000"
      },
      {
        name: "Blue",
        value: "#200CE8"
      }
    ]
  };

  handleNameChange = name => {
    this.setState({ name: name });
  };

  handleColorChange = selected => {
    this.setState({ selected: selected });
  };

  render() {
    const backgroundColor = this.state.colors[this.state.selected].value;
    const colorName = this.state.colors[this.state.selected].name;
    return (
      <div className="app" style={{ background: backgroundColor }}>
        <h1 className="open-sans">Reactive colors</h1>
        <Text name={this.state.name} color={colorName} />
        <Form
          onChangeName={this.handleNameChange}
          onChangeSelected={this.handleColorChange}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
