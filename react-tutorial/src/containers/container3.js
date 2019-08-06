import React, { Component } from 'react';

import * as ACTION_TYPES from '../store/actions/action_types';
import * as ACTIONS from '../store/actions/actions';

import { connect } from 'react-redux';


class Container3 extends Component {
    render() {
   
        return (
            <div>
      
                

                <hr />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

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

export default connect(mapStateToProps, mapDispatchToProps)(Container3);