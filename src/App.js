import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import ClearButton from "./components/ClearButton/ClearButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '0',
      previousNumber: '',
      currentNumber: '',
      operator: '',
    };
  }

  addToInput = val => {
    const { input, operator } = this.state

    if (operator) {
      this.setState({
        currentNumber: input + val,
        input: input + val,
      })
    } else {
      this.setState({
        input: input === '0' ? val : input + val,
      });
    }
  };

  addDecimal = val => {
    const { input } = this.state

    if (val === '.') {
      if (input.indexOf('.') === -1) {
        this.setState({
          input: input === '0' ? '0' + val : input + val,
        });
      }
    }
  }

  clearInput = () => {
    this.setState({
      input: '0',
      previousNumber: '',
      currentNumber: '',
      operator: '',
    });
  };

  backspace = () => {
    const { input } = this.state

    if (input) {
      this.setState({
        input: input.length === 1 ? '0' : input.slice(0, -1),
      })
    }
  };

  add = () => {
    const { input, previousNumber, currentNumber } = this.state

    if (previousNumber && currentNumber) {
      this.evaluate()
    }

    if (!previousNumber) {
      this.setState({
        previousNumber: input,
        input: '',
        operator: 'plus',
      });
    } else {
      this.setState({
        currentNumber: input,
        input: '',
        operator: 'plus',
      });
    }
  };

  subtract = () => {
    const { input, previousNumber, currentNumber } = this.state

    if (previousNumber && currentNumber) {
      this.evaluate()
    }

    if (!previousNumber) {
      this.setState({
        previousNumber: input,
        input: '',
        operator: 'subtract',
      });
    } else {
      this.setState({
        currentNumber: input,
        input: '',
        operator: 'subtract',
      });
    }
  };

  multiply = () => {
    const { input, previousNumber, currentNumber } = this.state

    if (previousNumber && currentNumber) {
      this.evaluate()
    }

    if (!previousNumber) {
      this.setState({
        previousNumber: input,
        input: '',
        operator: 'multiply',
      });
    } else {
      this.setState({
        currentNumber: input,
        input: '',
        operator: 'multiply',
      });
    }
  };

  divide = () => {
    const { input, previousNumber, currentNumber } = this.state

    if (previousNumber && currentNumber) {
      this.evaluate()
    }

    if (!previousNumber) {
      this.setState({
        previousNumber: input,
        input: '',
        operator: 'divide',
      });
    } else {
      this.setState({
        currentNumber: input,
        input: '',
        operator: 'divide',
      });
    }
  };

  modulo = () => {
    const { input, previousNumber, currentNumber } = this.state

    if (previousNumber && currentNumber) {
      this.evaluate()
    }

    if (!previousNumber) {
      this.setState({
        previousNumber: input,
        input: '',
        operator: 'modulo',
      });
    } else {
      this.setState({
        currentNumber: input,
        input: '',
        operator: 'modulo',
      });
    }
  };

  evaluate = () => {
    const {
      operator,
      previousNumber,
      currentNumber,
    } = this.state

    if (previousNumber && currentNumber && operator) {
      if (operator === "plus") {
        this.setState({
          input: `${parseFloat(previousNumber) + parseFloat(currentNumber)}`,
          previousNumber: `${parseFloat(previousNumber) + parseFloat(currentNumber)}`,
          currentNumber: '',
        });
      } else if (operator === "subtract") {
        this.setState({
          input: `${parseFloat(previousNumber) - parseFloat(currentNumber)}`,
          previousNumber: `${parseFloat(previousNumber) - parseFloat(currentNumber)}`,
          currentNumber: '',
        });
      } else if (operator === "multiply") {
        this.setState({
          input: `${parseFloat(previousNumber) * parseFloat(currentNumber)}`,
          previousNumber: `${parseFloat(previousNumber) * parseFloat(currentNumber)}`,
          currentNumber: '',
        });
      } else if (operator === "divide") {
        this.setState({
          input: `${parseFloat(previousNumber) / parseFloat(currentNumber)}`,
          previousNumber: `${parseFloat(previousNumber) / parseFloat(currentNumber)}`,
          currentNumber: '',
        });
      } else if (operator === "modulo") {
        this.setState({
          input: `${parseFloat(previousNumber) % parseFloat(currentNumber)}`,
          previousNumber: `${parseFloat(previousNumber) % parseFloat(currentNumber)}`,
          currentNumber: '',
        });
      }
    }
  };

  render() {
    const { input } = this.state

    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{input}</Input>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>AC</ClearButton>
            <ClearButton handleClear={this.backspace}>C</ClearButton>
            <ClearButton handleClear={this.modulo}>MOL</ClearButton>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide} operator>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply} operator>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.subtract} operator>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.add} operator>+</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
