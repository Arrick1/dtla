import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'


/* <------- Imported Components -------> */
import AddService from './Components/AddService/AddService'
import MapContainer from './Components/MapContainer/MapContainer'
import CreateUser from './Components/CreateUser/CreateUser'
import Login from './Components/Login/Login'
import * as routes from './constants/routes'


// import './App.css';

class App extends Component {
  state ={
    currentUSer: {},
    logged: false,
    location: ''
  }

  doSetCurrentUser = (user) =>
    this.setState({
      currentUser: user
    })



  render(){
    const {currentUser} = this.state
    return(
      <div>
        {/* <Switch>
          <Route exact path={routes.ROOT}/>
          <Route exact path={routes.LOGIN}/>
          <CreateUser />
          <Login />
          </Switch>
          <div className="mapContainer">
          <MapContainer />
        </div> */}
        <AddService />
      </div>
    )
  }
}
export default withRouter(App);
