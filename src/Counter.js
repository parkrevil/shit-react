import { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <button onClick={() => {
          this.setState((prev, props) => {
            return {
              number: prev.number + 1
            }
          })
          this.setState(prev => {
            return {
              number: prev.number + 1
            };
          })
        }}>+1</button>
      </div>
    );
  }
}

export default Counter;
