import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

/* <----------- React components -----------> */
import {Modal, Button, Form, FormGroup} from 'react-bootstrap'

/* <----------- styld components -----------> */
import styled           from 'styled-components'

const Container = styled.div`
  background-image: url('https://i.imgur.com/y370FSk.jpg');
`


class Login extends Component {

    state = {
        username: "",
        password: "",
        logged: false,
        loginModal: false
    }
    showLoginModal = () => {
        this.setState({ loginModal: true })
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
        const { isLogged } = this.props
        console.log(this.props.currentUser)
        return(
            isLogged ? <Redirect to={`/`} />
            :
              <Container > 
                <div> <button onClick={this.showLoginModal}> login </button> </div>
                

                { 
                    this.state.loginModal ?
                    
                <Modal 
                    size='lg' 
                    centered
                    show={this.showLoginModal}
                    onHide={this.hideLoginModal}
                >
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
                        <button className="modalButton" hideLoginModal={this.hideLoginModal} onClick={this.loginHandler}>Login</button>
                    </div>
                </Modal>
                :<div/>
               
                }
            </Container>
        )
    }
}

export default Login;
