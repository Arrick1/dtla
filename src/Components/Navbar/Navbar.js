import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'



// import "./Navbar.css";

// -----------> Reactstap Styling 
import { Navbar, Nav, Button, NavDropdown, Container } from 'react-bootstrap'

class NavbarItem extends Component {
    render(){
        return(
            <div>
                <Navbar bg="white" variant="dark" >
                <NavLink to={routes.HOME}>
                    <Navbar.Brand>
                        <img className="brandLogo" src='/images/LOGO_PNG.png'></img>
                    </Navbar.Brand>
                </NavLink>
                    <Nav> 
                        <NavLink to={routes.LOGIN}> <Button> Login</Button> </NavLink>  

                    </Nav>


                </Navbar>
            </div>
        )
    }
}

export default NavbarItem;