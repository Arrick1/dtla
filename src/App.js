import React, { Component } from 'react';
import MapContainer from './Components/MapContainer/MapContainer'
import CreateUser from './Components/CreateUser/CreateUser'
import Login from './Components/Login/Login'


// import './App.css';

class App extends Component {
  state ={
    user: '',
    location: ''
  }


  render(){
    return(
      <div>
        <CreateUser />
        <Login />
        <div className="mapContainer">
          <MapContainer />
        </div>
      </div>
    )
  }
}
export default App;
