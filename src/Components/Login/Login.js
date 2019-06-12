import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'



class Login extends Component {

    state = {
        username: "",
        password: "",
       
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    loginHandler = (e) => {
        // console.log(e)
        // console.log('<------- Login handler hit')
        e.preventDefault();
        this.props.doLoginUser(this.state)
        // console.log(this.state)
    }

    render(){
        const { username, password } = this.state
        // console.log(this.props.currentUser)
        return(
            <div>
                <form>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={username} 
                        onChange={this.handleChange}>
                    </input>
                    <br/>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={this.handleChange}>
                    </input>
                    <br/>
                    <button onClick={this.loginHandler}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;