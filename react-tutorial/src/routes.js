import React,  {Component} from 'react';

import Component1 from './functional/component1';
import Component2 from './functional/component2';
import Component3 from './functional/component3';
import Callback from './functional/callback';
import ProtectedRoute from './functional/protectedroutes';
import UnauthRedirect from './functional/unauthredirect';

import Container1 from './containers/container1';
import Container2 from './containers/container2';
import Header from './containers/header';
import history from './utils/history';

import {Router, Route, Switch, Redirect} from 'react-router';
import Auth from './utils/auth';
import AuthCheck from './utils/authcheck';

export const auth = new Auth();

const handleAuthentication = (props) => {
    if(props.location.hash) {
        auth.handleAuth();
    }
}

const PrivateRoute = ({component: Component, auth}) => (
    <Route render={props=> auth.isAuthenticated() === true
    ? <Component auth={auth} {...props} />
    : <Redirect to={{pathname:'/redirect'}} />
    }
    />
)


class Routes extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" render={() => <Container2 auth={auth} />} />
                            <Route path="/authcheck" render={() => <AuthCheck auth={auth} />} />
                            <Route path="/redirect" component={UnauthRedirect} />
                            
                            <Route path="/callback" render={(props) => {handleAuthentication(props); return <Callback />}}/>
                            <Route path="/component/:id" render={(props) => <Component1 {...props} />} />

                            <PrivateRoute path="/privateroute" auth={auth} component={ProtectedRoute}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )}
}

export default Routes;