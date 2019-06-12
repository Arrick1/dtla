import React, { Component } from "react";

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    render(){
        const { username, password } = this.state
        return(
            <div>
                <form>
                    <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange}></input><br/>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange}></input><br/>
                    <button type="submit" value="Submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;