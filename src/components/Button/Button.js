import React, { Component } from "react";
import "./Button.css";

class Button extends Component {

  render() {
    const {
      operator,
      children,
      handleClick,
    } = this.props

    return (
      <div
        className={`button ${operator ? 'operator' : ''}`}
        onClick={() => handleClick(children)}
      >
        {children}
      </div>
    )
  }
}

export default Button;
