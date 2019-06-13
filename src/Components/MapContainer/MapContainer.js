import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import Place from "../Place/Place";
import AllServices from '../AddService/AddService'


export class MapContainer extends Component {
  state = {
    address: '',
    lat: '34.0407',
    lng: '-118.2468',
    categories:''
  }

  coordinatesChange = (info) => {
    this.setState({
      lat:info.lat,
      lng:info.lng
    })
  }

  categorieHandler = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  categorieSubmit = (e) => {
    e.preventDefault()
    this.props.fillterServices(this.state)
  }

  placeSubmit = (info) => {
    // this.setState({
    //   lat: "",
    //   lng:""
    // })
    console.log('placesubmit working')
  }

  render(){
    const { address, lat, lng } = this.state
    return(
      <div className="mapContainer">

        <div className="UmYeah">
          <Place placeSubmit={this.placeSubmit}/>
          <form onSubmit={this.categorieSubmit}>
            sort
            <select name='categories' onChange={this.categorieHandler}>
              <option value="all">all</option>
              <option value='food'>food</option>
              <option value='selfParking'>Self Parking</option>
              <option value='shower'>shower</option>
              <option value='jobs'>jobs</option>
            </select>
            <button type='Submit'>Submit</button>
          </form>
          <div className='map'>
            <Map
              google={this.props.google}
              initialCenter={{
              lat: 34.0407,
              lng: -118.2468
              }}
            style={{width: "100%", height: "100%"}}
            zoom={13}>
            <Marker
              title={'The marker`s title will appear as a tooltip.'}
              name={'SOMA'}
              position={{lat: `${lat}`, lng: `${lng}`}} />
            </Map>
          </div>
        </div>
        <AllServices allServices={this.props.allServices}/>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg")
})(MapContainer)
