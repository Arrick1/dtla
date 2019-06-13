import React, { Component } from 'react';

class AllServices extends Component {

  render(){
    const { allServices } = this.props
    return(
      <div>
        {allServices.map((s,i)=>{
          return <h1>{s.name}</h1>
        })}
      </div>
    )
  }
}

export default AllServices;