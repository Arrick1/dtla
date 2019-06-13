import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'



class Login extends Component {

    state = {
        username: "",
        password: "",
        logged: false,
        loginModal: false
    }
    showLoginModal = () => {
        this.setState({ loginModal:false })
      }
      hideLoginModal = () => {
        this.setState({ loginModal: false })
      }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    loginHandler = (e) => {
        e.preventDefault();
        this.props.doLoginUser(this.state)
    }

    render(){
        const { username, password } = this.state
        console.log(this.props.currentUser)
        return(
            <div className="loginContainer">
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