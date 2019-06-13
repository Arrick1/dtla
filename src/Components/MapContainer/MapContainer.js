import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import Place from "../Place/Place";
import "./MapContainer.css";


export class MapContainer extends Component {
  state = {
    address: ''
  }

  render(){
    const { address } = this.state
    console.log(this.props.place)
    return(
      <div className="mapContainer">
        <div className="map">
        <Place />
        </div>     
        <Map
          google={this.props.google}
          initialCenter={{
              lat: 34.0407,
              lng: -118.2468
          }}
          style={{width: "1055px", height: "620px"}}
          zoom={13}
        />
          <div className="sort"></div>
        <Marker/>

      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg")
})(MapContainer)
