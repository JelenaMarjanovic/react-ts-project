import React from "react";

import CounterOutput from "./CounterOutput";

// interface IAppProps {}

interface IAppState {
  counterValue: number;
}

class App extends React.Component<{}, IAppState> {
  public state = { counterValue: 0 };

  private decrementHandler = () =>
    this.setState(previousState => {
      return {
        counterValue: previousState.counterValue - 1
      };
    });

  private incrementHandler = () =>
    this.setState(previousState => {
      return {
        counterValue: previousState.counterValue + 1
      };
    });

  public render() {
    return (
      <div style={{ textAlign: "center" }}>
        <CounterOutput counter={this.state.counterValue} />
        <button onClick={this.decrementHandler}>Decrement</button>
        <button onClick={this.incrementHandler}>Increment</button>
      </div>
    );
  }
}

export default App;
