import { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Counter App</h1>
        <h2 className="count">{this.state.count}</h2>
        <div className="buttons">
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </button>
          <button onClick={() => this.setState({ count: 0 })}>Reset</button>
        </div>
      </div>
    );
  }
}
