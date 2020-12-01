import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AuthenticationService from "../Authentication/AuthenticationService.js";

// const useStyles = makeStyles((theme) => ({
//   customPaper: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(1),
//       width: theme.spacing(16),
//       height: theme.spacing(16),
//     },
//   },
// }))
// const classes = useStyles();

class LoginComp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username : 'Username',
      password : '',
      hasLoginFailed : false,
      showSuccessMessage : false
    }
    // this.handlerUsernameChange = this.handlerUsernameChange.bind(this);
    // this.handlerPasswordChange = this.handlerPasswordChange.bind(this);
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
    //hardCOded values
    //admin
    //test
    if (this.state.username === 'admin@admin' && this.state.password ==='test') {
      // console.log('Login Successful')
      AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
      this.props.history.push(`/home/${this.state.username}`)
      // this.setState({showSuccessMessage :true})
      // this.setState({hasLoginFailed : false})

    } else {
      this.setState({showSuccessMessage :false})
      this.setState({hasLoginFailed : true})
      console.log('Login Failed')
      // console.log(this.state)
    }
  }
  // handlerUsernameChange(e) {
  //   console.log(e.target.value)
  //   this.setState({username : e.target.value})
  // }
  // handlerPasswordChange(e) {
  //   console.log(e.target.value)
  //   this.setState({password : e.target.value})
  // }
  render() {
    return(
        <div>
          <h1>Login</h1>
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
                     onChange={this.handleChange}/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input"
                     id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check
                  me out</label>
            </div>
            <button type="submit" className="btn btn-primary"
            onClick={this.loginClicked}>Submit</button>
          </form>
          {/*User Name<input type="text" name="username"/>*/}
          {/*  Password <input type="text" name="password"/>*/}
          {/*  <button>Login</button>*/}
        </div>
        </div>
    );
  }
}
// function ShowInvalidCredentials(props) {
//   if(props.hasLoginFailed) {
//     return <div className="alert alert-danger" role="alert">Invalid
//       Credentials</div>
//   } else {
//     return null
//   }
// }
// function ShowValidCredentials(props) {
//   if(!props.showSuccessMessage) {
//     return <div className="alert alert-success" role="alert">Login
//       Successful</div>
//   } else {
//     return null
//   }
// }
export default LoginComp;