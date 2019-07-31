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

    render() {
        return(
            <div>
                {/* {this.props.date} */}
                <button onClick={()=>this.changeState()}>Change State</button>
                <br/>
                {this.state.stateprop1}
                <br/>
                {this.state.stateprop2}
                <hr></hr>
            </div>
        )
    }
}

export default Container1;