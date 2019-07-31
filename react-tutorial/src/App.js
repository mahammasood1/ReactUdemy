import React, { Component } from 'react';
import './App.css'
import Component1 from './functional/component1'
import Container1 from './container/container1'

class App extends Component {

  state = {
    counter: 0
  }

  increment = () => {
    this.setState({counter:5})
  }

  renderFunction1 = () =>{
    return(
      true
      ?<div>Condition 1</div>
      :<div>Condition 2</div>
    )
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
        <Container1 date="31st Jul, 2019" />
        <Component1 name="Maham" qs="How are you today?"/>
        <br />
        
        {this.renderFunction1()}
    </div>
    );
  }
}

export default App;
