import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import Place from "../Place/Place";
import "./MapContainer.css";


export class MapContainer extends Component {
  state = {
    address: ''
  }

  inputHandle = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  render(){
    const { address } = this.state
    console.log(this.props.place)
    return(
      <div>
        <form>
          <input type="text" name="address" placeholder="Address" value={address} onChange={this.inputHandle}></input>
          <button type='submit'>Submit</button>
        </form>
        <Place />
        <div className="map">
        <Map
          google={this.props.google}
          initialCenter={{
              lat: 34.0407,
              lng: -118.2468
          }}
          style={{width: "1055px", height: "620px"}}
          zoom={13}
        />
        </div>
        <Marker/>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg")
})(MapContainer)
