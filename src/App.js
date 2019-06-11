import React, { Component } from 'react';
import MapContainer from './Components/MapContainer/MapContainer'


// import './App.css';

class App extends Component {
  state ={
    user: ''
  }


  render(){
    return(
      <div>
        <MapContainer />
      </div>
    )
  }
}
export default App;
