import React, { Component } from 'react';
import './App.css'
class App extends Component {

  state = {
    counter: 0
  }

  increment = () => {
    this.setState({counter:5})
  }

  render() {
    return (
      <div className="App">

        <button onClick={()=>{this.increment()}}>Increment</button>
        <div>
          Div 1: {this.state.counter}
        </div>

        <div>
          Div 2:
        </div>

        <div>
          Div 3:
        </div>
    </div>
    );
  }
}

export default App;
