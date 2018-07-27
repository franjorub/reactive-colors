import React, { Component } from "react";

class Text extends Component {
  render() {
    const { name, color } = this.props;
    return (
      <div className="text open-sans">
        <p>
          Hello my name is
          <span>{name}</span>, and my favorite color is
          <span>{color}</span>.
        </p>
      </div>
    );
  }
}

export default Text;
