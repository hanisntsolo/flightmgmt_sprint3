import React, { Component } from 'react';

import AuthenticationService from "../Authentication/AuthenticationService.js";

class LoginComp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username : 'Username',
      password : '',
      hasLoginFailed : false,
      showSuccessMessage : false
    }
    this.handleChange = this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
  }

  handleChange(e) {
    console.log(this.state)
    this.setState(
        {
                [e.target.name]
                    :e.target.value
        })
  }
  loginClicked(e) {
    if (this.state.username === 'admin@admin' && this.state.password ==='test') {
      AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
          .then(() => this.props.history.push('/home'));

    } else {
      this.setState({showSuccessMessage :false})
      this.setState({hasLoginFailed : true})
      console.log('Login Failed')
    }
  }
  render() {

    return(
        <div>
          <h1 className="ui-icon-key display-4">Login</h1>
          {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
          {/*<ShowValidCredentials showSuccessMessage={this.state.showSuccessMessage}/>*/}
          {this.state.hasLoginFailed && <div className="alert alert-danger" role="alert">Invalid Credentials</div>}
          {this.state.showSuccessMessage && <div className="alert alert-success" role="alert">Login Successful</div>}
        <div class="form-group">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" >Email address</label>
              <input name="username" type="email" className="form-control"
                     id="exampleInputEmail1" aria-describedby="emailHelp"
                     value={this.state.username}
                     onChange={this.handleChange}/>
                <small id="emailHelp" className="form-text text-muted">We'll
                  never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input name="password" type="password" className="form-control"
                     id="exampleInputPassword1"
                     value={this.state.password}
                     placeholder="Password"
                     onChange={this.handleChange}/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input"
                     id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check
                  me out</label>
            </div>
            <button type="submit" className="btn btn-primary"
            onClick={this.loginClicked}>Login</button>
          </form>
        </div>
        </div>
    );
  }
}

export default LoginComp;
