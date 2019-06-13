import React, { Component } from 'react';

class AllServices extends Component {

  render(){
    const { allServices } = this.props
    console.log(allServices )
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