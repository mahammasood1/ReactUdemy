import React, { Component } from 'react';
import './App.css'
import Component1 from './functional/component1'
import Container1 from './container/container1'
import Container2 from './container/container2'

class App extends Component {

  Arr1 = [
    { id: 1, text: "Object 1" },
    { id: 2, text: "Object 2" },
    { id: 3, text: "Object 3" }
  ]

  state = {
    counter: 0
  }

  increment = () => {
    this.setState({ counter: 5 })
  }

  renderFunction1 = () => {
    return (
      true
        ? <div>Condition 1</div>
        : <div>Condition 2</div>
    )
  }

  renderListItem = props => {
    return (
      <div>
        {props.item.text}
      </div>
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
       */}

        <h2>React</h2>
        <hr />
        {/* {<Container1 date="31st Jul, 2019" />} */}
        {<Container2 />}
        {/* <Component1 name="Maham" qs="How are you today?" /> } */}
        <hr />

        {/* {this.renderFunction1()} */}
        {/* {this.Arr1.map( (item, index) => (<this.renderListItem key={index} item={item}/>))} */}
      </div>
    );
  }
}

export default App;
