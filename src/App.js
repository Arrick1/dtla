import React, { Component } from 'react';
import MapContainer from './Components/MapContainer/MapContainer'


// import './App.css';

class App extends Component {
  state ={
    user: '',
    location: ''
  }


  render(){
    return(
      <div>
        <div className="mapContainer">
          <MapContainer />
        </div>
      </div>
    )
  }
}
export default App;
