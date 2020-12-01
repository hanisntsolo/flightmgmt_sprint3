import React, { Component } from "react";
import "./Login.css"

//const emailRegex = RegExp(
//  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: null,
      password: null,
      formErrors: {
        userName: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
          --SUBMITTED--`);

    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "userName":
        formErrors.userName =
            value.length < 3 ? "minimum 3 characters required" : "";
        break;

      case "password":
        formErrors.password =
            value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;

    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="userName">
                <label htmlFor="userName">User Name</label>
                <input
                    className={formErrors.userName.length > 0 ? "error" : null}
                    placeholder="User Name"
                    type="text"
                    name="userName"
                    noValidate
                    onChange={this.handleChange}
                />
                {formErrors.userName.length > 0 && (
                    <span className="errorMessage">{formErrors.userName}</span>
                )}
              </div>


              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                    className={formErrors.password.length > 0 ? "error" : null}
                    placeholder="Password"
                    type="password"
                    name="password"
                    noValidate
                    onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>

              <div className="SignIn">
                <button type="submit">Sign In</button>
              </div>

            </form>
          </div>
        </div>
    );
  }
}
export default Login;