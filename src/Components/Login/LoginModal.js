import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'

/* <----------- React components -----------> */
import {Modal, Button, Form, FormGroup} from 'react-bootstrap'

class LoginModal extends Component {
    state={
        username: "",
        password: "",
        logged: false,
        loginModal: true
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
        return(
            <Modal 
                size='lg' 
                centered
                show={this.props.showLoginModal}
                onHide={this.props.hideLoginModal}>

                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                    <div className="modalBody">
                        <Form>

                            <Form.Group>
                                <Form.Label className='display'>Username</Form.Label>
                                    <input
                                        className="input" 
                                        type="text" 
                                        name="username"  
                                        value={username} 
                                        onChange={this.handleChange}>
                                     </input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className="display"> Password</Form.Label>
                                    <input 
                                        className="input"
                                        type="password" 
                                        name="password" 
                                        value={password} 
                                        onChange={this.handleChange}>
                                    </input>  
                            </Form.Group>

                        </Form>
                    </div>
                    <div className="mFooter">
                        <button className="modalButton" onClick={this.loginHandler}>Login</button>
                    </div>
            </Modal>

        )
    }

}

export default LoginModal