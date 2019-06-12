import React, { Component } from "react";
import * as routes from "../../constants/routes";
import "./Navbar.css";

class Navbar extends Component {
    render(){
        return(
            <div className="nav">
                <button className="login-btn" onClick={routes.LOGIN}>Login</button>
            </div>
        )
    }
}

export default Navbar;