import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';


export class MapContainer extends Component {
  state = {
    address: ''
  }
  render(){
    const { address } = this.state
    return(
      <div>
        <form>
          <input name='address' placeholder='enter location' value={address}></input>
          <button type='submit'>Submit</button>
        </form>
        <Map
          google={this.props.google}
          initialCenter={{
              lat: 34.0407,
              lng: -118.2468
          }}
          style={{width: "700px", height: "500px"}}
          zoom={13}
        />

        <Marker/>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg")
})(MapContainer)
