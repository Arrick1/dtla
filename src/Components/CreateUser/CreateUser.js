import React, { Component } from "react";

class CreateUser extends Component {

    state = {
        username: "",
        password: "",
        email: ""
    }

    render(){
        return(
            <div>
                <form>
                <input type="text" name="username" placeholder="Username"></input>
                <input type="text" name="email" placeholder="Email"></input>
                <input type="password" name="password" placeholder="Password"></input>
                <button>Register</button>
                </form>
            </div>
        )
    }
}

export default CreateUser;