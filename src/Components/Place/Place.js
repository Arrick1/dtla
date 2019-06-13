import { GoogleComponent } from "react-google-location";
import React, { Component } from "react";
const API_KEY = "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"

class Place extends Component {
  state = {
    lat:'',
    lng: ''
  }

  inputHandler = (e) => {
    this.setState({
      lat: e.coordinates.lat,
       lng: e.coordinates.lng
     })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.placeSubmit(this.state)
    console.log("submithandler")
  }

  render(){
      console.log(this.state)
      return(
          <div>
            <form onSubmit={this.submitHandler}>
              <GoogleComponent
                className="Rectangle"
                apiKey={API_KEY}
                language={'en'}
                country={'country:us'}
                coordinates={true}
                locationBoxStyle={'custom-style'}
                locationListStyle={'custom-style-list'}
                onChange={this.inputHandler} />
            </form>

          </div>
      )
  }
}

export default Place;
