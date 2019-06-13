import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import Place from "../Place/Place";

import AllServices from '../AllServices/AllServices'


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

  categoryHandler = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  categorySubmit = (e) => {
    e.preventDefault()
    this.props.filterServices(this.state)
  }

  placeSubmit = (info) => {
    console.log(info, 'infooooo')
    this.setState({
      lat: info.lat,
      lng: info.lng
    })
    console.log('placeSubmit working')
  }

  render(){
    const { address, lng, lat } = this.state
    console.log(lng, "lngggg", lat, "lattttt")
    return(
      <div className="mapContainer">


        {/* <div className="UmYeah"> */}

        <Place placeSubmit={this.placeSubmit}/>

        <form onSubmit={this.categorySubmit}>
          sort
          <select name='categories' onChange={this.categoryHandler}>
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
              lat: `34.0407`,
              lng: `-118.2468`}}
            center={{
              lat: `${lat}`,
              lng: `${lng}`
            }}
            style={{width: "100%", height: "100%"}}
            zoom={13}>
            {/* <Marker
              title={'The marker`s title will appear as a tooltip.'}
              name={'SOMA'}
            position={{lat: `${lat}`, lng: `${lng}`}} /> */}
          </Map>
        </div>



      {/* </div> */}
            <AllServices allServices={this.props.allServices}/>
           <div className="category-wrapper">
            <h1 className="cat-header">Categories</h1>
              <div className="categories">
                <img value='click' className="category" src="/images/bed-bedroom-color-212269.jpg"></img>
                <img className="category" src="/images/carrots-carrying-colorful-1389103.jpg"></img>
                <img className="category" src="/images/bathroom-bathtub-bottles-2008269.jpg"></img>
                <img className="category" src="/images/aerial-aerial-shot-aerial-view-753876.jpg"></img>
                <img className="category" src="/images/alert-attention-caution-2217145.jpg"></img>
                <img className="category" src="/images/adult-brainstorming-businesswoman-515169.jpg"></img>
                <img className="category" src="/images/blackboard-chairs-chalk-159844.jpg"></img>
                <img className="category" src="/images/buildings-bus-chicago-2181194.jpg"></img>
                <img className="category" src="/images/care-check-checkup-905874.jpg"></img>
              </div>
           </div>
           <div className="footer">
           <div className="footer-items">
           <div className="footer-links">
             <a href="" className="links">Home</a>
             <a href="" className="links">About</a>
             <a href="" className="links">Contact</a>
           </div>
            <p className="copyright">SelfParkingLA.org &copy; 2018-2019</p>
           </div>
           </div>
        </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg")
})(MapContainer)
