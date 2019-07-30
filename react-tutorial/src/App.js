import React, { Component } from 'react';
import './App.css'
import Component1 from './functional/component1'
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
{/* 
        <button onClick={()=>{this.increment()}}>Increment</button>
        <div>
          Div 1: {this.state.counter}
        </div>

        <div>
          Div 2:
        </div>

        <div>
          Div 3:
        </div> */}

        React
        <Component1 />
    </div>
    );
  }
}

export default App;
