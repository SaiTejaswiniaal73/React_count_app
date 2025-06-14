import React from "react";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    // alert("hello ther + clicked");
    this.setState({ count: this.state.count + 1 }); //updater function for state
  };
  handleDecrement = () => {
    // alert("helo - clicked");
    this.setState({ count: this.state.count - 1 }); //updater function for state
  };
  handleReset = () => {
    this.setState({ count: 0 }); // This is the correct way to reset
  };
  render() {
    return (
      <div className="app-container">
        <h1 className="app_title">Counter App</h1>
        <div className="counter-container">
          <button className="reset-btn" onClick={this.handleReset}>
            Reset
          </button>
        </div>
        <div className="display-box">{this.state.count}</div>
        <div className="controls">
          <button
            className="minus-btn"
            onClick={this.handleDecrement}
            disabled={this.state.count === 0}
          >
            -
          </button>

          <button
            className="plus-btn"
            onClick={this.handleIncrement}
            disabled={this.state.count == 20}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
export default App;
