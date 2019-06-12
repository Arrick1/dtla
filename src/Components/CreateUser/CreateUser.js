import React, { Component } from "react";

class CreateUser extends Component {

    state = {
        username: "",
        password: "",
        email: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    render(){
        const {username, password, email } = this.state
        return(
            <div>
                <form>
                <input type="text" name="username" placeholder="Username" value={username} onChange={handleChange}></input><br/>
                <input type="text" name="email" placeholder="Email" value={email} onChange={handleChange}></input><br/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange}></input><br/>
                <button type="submit" value="Submit">Register</button>
                </form>
            </div>
        )
    }
}

export default CreateUser;