import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
// import Navbar from "./Components/Navbar/Navbar";


/* <------- Imported Components -------> */
import  AddService from './components/AddService/AddService'
import MapContainer from './components/MapContainer/MapContainer'
// import CreateUser from './components/CreateUser/CreateUser'
import Login from './components/Login/Login'
import * as routes from './constants/routes'
import NavbarItem from './components/Navbar/Navbar'


import { Col } from 'react-bootstrap'


import './App.css';

class App extends Component {
  state ={
    currentUser: {},
    logged: false,
    location: '',
    allServices: []
  }

  async componentDidMount(){
    this.getServices().then(res => {
      this.setState({
        allServices: res.findServices
      })
    })
    const user = await localStorage.getItem('currrent')
    const parsedUser = await JSON.parse(user)
      if(user){
        this.setState({
          currentUser: parsedUser
        })
      }
    }

  doSetCurrentUser = (user) =>
    this.setState({
      currentUser: user
    })

  doLoginUser = async (info) => {
    const loginResponse = await fetch('http://localhost:3010/auth/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(info),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    const parsedResponse = await loginResponse.json()
    console.log(parsedResponse.data, '<------- this is the parsedResponse')
    if(parsedResponse.success){
      this.doSetCurrentUser(parsedResponse.data)
      localStorage.setItem('current', JSON.stringify(parsedResponse.data))
      this.setState({
        logged: true,
        currentUser: parsedResponse.data
        })
        console.log('success true')
      } else{
        console.log('not logged in')
      }
  }

  doLogout = async () =>{
    await fetch('http://localhost:3010//auth/logout')
      localStorage``.clear()
      this.setState({
        currentUser: {},
        logged:false
      })
      this.props.history.push(routes.LOGIN)
    }

    createService = async(info) => {
      try{
        const createSer = await fetch('http://localhost:3010/services', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(info),
          headers: {
            'Content-Type' : 'application/json'
          }
        })
        const resCreate = await createSer.json()
        if(resCreate.success){
          this.setState({
            allServices: [...this.setState.allServices, resCreate.createService]
          })
          this.props.history.push('/')
        }
      }catch(err){
        return err
      }
    }


    getServices = async() => {
      try{
        const resServices = await fetch('http://localhost:3010/services', {
          credentials: 'include'
        })
        const parsedServices = await resServices.json()
        return parsedServices
      }catch(err){
      }
    }

  render(){
    const {currentUser} = this.state
    console.log(this.state.allServices)
    return(

      <div className="grid-container">
      <div className="grid-nav">
        <NavbarItem />
      </div>

      <div className="grid-main">
        <Switch>

          <Route exact path={routes.HOME} render={() =><MapContainer/>}/>


          <Route exact path={routes.LOGIN} render={() =>
            <Login
              isLogged={this.state.logged}
              doLoginUser={this.doLoginUser}
              doSetCurrentUser={this.doSetCurrentUser}

              currentUser={currentUser} />}/>
         
          <Route exact path={routes.ADDSERVICE} render={()=>
            <AddService createService={this.createService}/>}/>

        </Switch>

      </div>
      <div className="grid-footer"></div>
      </div>
    )
  }
}
export default withRouter(App);
