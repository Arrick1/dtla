import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'


/* <------- Imported Components -------> */
import MapContainer from './Components/MapContainer/MapContainer'
import CreateUser from './Components/CreateUser/CreateUser'
import Login from './Components/Login/Login'
import * as routes from './constants/routes'


// import './App.css';

class App extends Component {
  state ={
    currentUser: {},
    logged: false,
    location: ''
  }

  async componentDidMount(){
    const user = await localStorage.getItem('currrent')
    const parsedUser = await JSON.parse(user)
    if(user){
      this.setState({
        currentUser: parsedUser
      })
    }
    console.log(parsedUser)
  }

  doSetCurrentUser = (user) =>
    this.setState({
      currentUser: user
    })
  
  doLoginUser = async (info) => {
    const loginResponse = await fetch('/auth/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(info),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    const parsedResponse = await loginResponse.json()
      if(parsedResponse.data){
        this.doSetCurrentUser(parsedResponse.data)
        localStorage.setItem('current', JSON.stringify(parsedResponse.data))
        this.setState({
          logged: true,
          currentUser: parsedResponse.data
        })

      } else{
        console.log('not logged in')
      }
  }

  doLogout = async () =>{
    await fetch('/auth/logout')
      localStorage``.clear()
      this.setState({
        currentUser: {},
        logged:false
      })
      this.props.history.push(routes.LOGIN)
    }
  

  render(){
    const {currentUser} = this.state
    return(
      <div>
        <Switch>
          <Route exact path={routes.ROOT}/>
          <Route exact path={routes.LOGIN} render={() => 
            <Login
              isLogged={this.state.log} 
              doLoginUser={this.doLoginUser}
              doSetCurrentUser={this.doSetCurrentUser}
              currentUser={currentUser}
            />}
          />
          <Route exact path={`${routes.PROFILE}/:id`}/>
        <CreateUser />
        <Login />
        </Switch>
        <div className="mapContainer">
          <MapContainer />
        </div>
      </div>
    )
  }
}
export default withRouter(App);
