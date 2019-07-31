import React, {Component} from 'react';

class Container1 extends Component{

    constructor(props){
        super(props)

        this.state={
            stateprop1:"Our initial state",
            stateprop2: 5
        }
    }

    changeState = () => {
        // this.setState((prevState, props) => ({stateprop2: prevState.stateprop2+1}))
        this.setState({stateprop1: this.state.stateprop1+" changed", stateprop2: this.state.stateprop2+1})
    }

    handleChange = (event) =>{
        console.log(event.target.value)
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(event.target.name.value)

    }

    render() {
        return(
            <div>
                {/* {this.props.date}
                <button onClick={()=>this.changeState()}>Change State</button>
                <br/>
                {this.state.stateprop1}
                <br/>
                {this.state.stateprop2}
                <hr></hr> */}
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input id="name" onChange={this.handleChange} type="text"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Container1;