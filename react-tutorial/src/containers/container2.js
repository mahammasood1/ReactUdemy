import React, { Component } from 'react';

import * as ACTION_TYPES from '../store/actions/action_types';
import * as ACTIONS from '../store/actions/actions';

import { connect } from 'react-redux';
import Auth from '../utils/auth';

// const auth = new Auth()

class Container2 extends Component {
    render() {
        const user_text = "Good Morning!"

        return (
            <div>
                <button onClick={() => console.log(this.props.stateprop1)}>Get StateProp1</button>
                <button onClick={() => console.log(this.props.user_text)}>Get UserText</button>
                <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
                <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
                <button onClick={() => this.props.action_creator1()}>Dispatch Action Creator 1</button>
                <button onClick={() => this.props.action_creator2()}>Dispatch Action Creator 2</button>
                <button onClick={() => this.props.action_creator3(user_text)}>Dispatch Action Creator 3</button>
                <button onClick={() => console.log(this.props.is_authenticated)}>Get User Profile</button>

                {this.props.user_text ? <h1>{this.props.user_text}</h1> : null}
                <hr />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stateprop1: state.reducer1.stateprop1,
        user_text: state.user_reducer.user_text,
        user_profile: state.auth_reducer.profile,
        is_authenticated: state.auth_reducer.is_authenticated
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action1: () => dispatch(ACTIONS.SUCCESS),
        action2: () => dispatch(ACTIONS.FAILURE),
        action_creator1: () => dispatch(ACTIONS.success()),
        action_creator2: () => dispatch(ACTIONS.failure()),
        action_creator3: (text) => dispatch(ACTIONS.user_input(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container2);