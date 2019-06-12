import { GoogleComponent } from "react-google-location";
import React, { Component } from "react";
const API_KEY = "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"

class Place extends Component {
    state = {
        place: null
    }


    render(){
        console.log(this.state.place)
        return(
            <div>
                <GoogleComponent
         
                apiKey={API_KEY}
                language={'en'}
                country={'country:us'}
                coordinates={true}
                // locationBoxStyle={'custom-style'}
                // locationListStyle={'custom-style-list'}
                onChange={(e) => { this.setState({ place: e }) }} />
            </div>
        )
    }
}

export default Place;