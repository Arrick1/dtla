import React, { Component } from "react";

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text" name="username" placeholder="Username"></input>
                    <input type="password" name="password" placeholder="Password"></input>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;