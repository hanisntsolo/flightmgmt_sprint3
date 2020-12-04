import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { Link, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

class UserRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Router>

                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/sign-up"}><h3>Sign up /</h3></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/Login"}><h3>Login</h3></Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <Switch>
                                <Route path="/Login" component={Login} />
                                <Route path="/sign-up" component={SignUp} />

                            </Switch>
                        </div>
                    </div>

                </Router>
            </div>
        );

    }

}

export default UserRouter;