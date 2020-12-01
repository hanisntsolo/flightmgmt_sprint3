import React, { Component } from "react";
import "./App.css"
import "./SignUp.css"


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

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

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      mobileNumber: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobileNumber: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
          --SUBMITTED--`);
//          First Name: ${this.state.firstName}
//          Last Name: ${this.state.lastName}
//          Email: ${this.state.email}
//          Password: ${this.state.password}
//          Mobile: ${this.state.mobileNumber}
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
            value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
            value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
            ? ""
            : "invalid email address";
        break;
      case "password":
        formErrors.password =
            value.length < 6 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
      case "mobileNumber":
        formErrors.mobileNumber = value.length < 10 ? "minimum 10 digit required" : "";
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                    className={formErrors.firstName.length > 0 ? "error" : null}
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    noValidate
                    onChange={this.handleChange}
                />
                {formErrors.firstName.length > 0 && (
                    <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                    className={formErrors.lastName.length > 0 ? "error" : null}
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    noValidate
                    onChange={this.handleChange}
                />
                {formErrors.lastName.length > 0 && (
                    <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                    className={formErrors.email.length > 0 ? "error" : null}
                    placeholder="Email"
                    type="email"
                    name="email"
                    noValidate
                    onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
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
              <div className="mobileNumber">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                    className={formErrors.mobileNumber.length > 0 ? "error" : null}
                    placeholder="Mobile Number"
                    type="text"
                    name="mobileNumber"
                    noValidate
                    onChange={this.handleChange}
                />
                {formErrors.mobileNumber.length > 0 && (
                    <span className="errorMessage">{formErrors.mobileNumber}</span>
                )}
              </div>
              <div className="createAccount">
                <button type="submit">Create Account</button>
                <a href="/Login"><small>Already Have an Account?</small></a>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default SignUp;