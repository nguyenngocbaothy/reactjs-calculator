import React, { Component } from "react";
import "./ClearButton.css";

class ClearButton extends Component {
  render() {
    const { handleClear } = this.props

    return (
      <div
        className="clear-btn"
        onClick={() => handleClear()}
      >
        {this.props.children}
      </div>
    )
  }
}

export default ClearButton;
