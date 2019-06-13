import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import * as routes from '../../constants/routes'


// <----------- Reactstap Styling ----------->
import { Navbar, Nav, } from 'react-bootstrap'

class NavbarItem extends Component {

  logOutHandler = () => {
    this.props.doLogout()
  }

    render(){
      const { isLogged } = this.props
        return(
            <div>

                <div className='navbarContainer' >
                    <NavLink to={routes.HOME}>
                        <Navbar.Brand><img className="brandLogo" src='/images/LOGO_PNG.png'></img></Navbar.Brand>
                    </NavLink>
                    {

                  isLogged
                    ? (
                      <Nav>
                        <NavLink to={'/addservice'}><button><img src='/images/single-01.png'></img></button></NavLink>
                        <NavLink to={routes.LOGIN}> <button className="login-btn" onClick={this.logOutHandler}> Logout</button> </NavLink>
                      </Nav>

                    )
                    : (
                      <Nav>
                        <NavLink to={routes.GETINVOLVED}> <button className="login-btn"> Get Involved</button> </NavLink> 
                        <NavLink to={routes.LOGIN}> <button className="login-btn"> Login</button> </NavLink>
                      </Nav>

                    )
                }
                </div>
            </div>
        )
    }
}

export default NavbarItem;
