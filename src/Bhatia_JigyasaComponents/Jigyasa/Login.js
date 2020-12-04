import axios from "axios";
import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    // Jigyasa's code
    submitHandler(e) {
        e.preventDefault()
        axios.post('http://localhost:8080/user/validate', this.state)
            .then(res => {
                console.log(res)
                if (res.status === 200) console.log("valid user");
            })
            .catch(error => {
                console.log("Not a valid user");
            })
    }
    //Dhirendra code
    // submitHandler(e) {
    //     e.preventDefault()
    //     axios.post('http://localhost:8080/user/validate', this.state)
    //         .then((res) => {
    //             if (res.status === 200) {
    //                 console.log("valid user");
    //             }
    //         })
    //         .catch(error => {
    //             alert("Not a valid user");
    //         })
    // }
    render() {
        return (
            <center>
                <div style={{ backgroundColor: "DarkGray" }}>
                <form class="text-center border border-light p-5 w-50 h-60" action="#!">
                        <h2>Sign In</h2>
                    {/* <p class="h4 mb-4">Sign in</p> */}
                    <table className="table table-striped">
                        <tr>
                            <td>
                                <span className="badge">User Id</span>
                            </td>
                            <td><input type="number" id="defaultLoginFormEmail" name="userId" class="form-control mb-4" placeholder="User Id" onChange={this.changeHandler} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="badge">Password</span>
                            </td>
                            <td><input type="password" id="defaultLoginFormPassword" name="password" class="form-control mb-4" placeholder="Password" onChange={this.changeHandler} />
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                            <button class="btn btn-primary btn-sm" type="button" onClick={this.submitHandler}>Sign in</button>
                            </td>
                        </tr>
                    </table>
                </form>
                </div>
            </center>
        );
    }
}

export default Login;

