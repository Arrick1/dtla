import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';



const time = [1,2,3,4,5,6,7,8,9,10,11,12]
const dayArr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

class AddService extends Component {
  state = {
    name:"",
  	city:"",
  	state:"",
  	zip:"",
  	phone:"",
  	email:"",
  	web:"",
  	day:[],
    opening: [],
    closing: [],
    hoursTest: '',
  	eligibility:"",
  	description:""
  }

  inputHandler = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  openHandler = (e) => {
    this.setState({
      opening: [...this.state.opening, e.currentTarget.value]
    })
  }

  closingHandler = (e) => {
    this.setState({
      closing: [...this.state.closing, e.currentTarget.value]
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.createService(this.state)
  }

  dayHandler = (e) => {
    console.log('hello')
  }

  render(){
    const { name, city, state, zip, phone, email, web, day, hours, eligibility, description } = this.state
    return(
      <div className='addServiceContainer'>
        <form onSubmit={this.submitHandler}>
          <input type='text' placeholder='name' name='name' value={name} onChange={this.inputHandler}></input>
          <input type='text' placeholder='city' name='city' value={city} onChange={this.inputHandler}></input>
          <input type='text' placeholder='state' name='state' value={state} onChange={this.inputHandler}></input>
          <input type='text' placeholder='zip' name='zip' value={zip} onChange={this.inputHandler}></input>
          <input type='text' placeholder='phone' name='phone' value={phone} onChange={this.inputHandler}></input>
          <input type='text' placeholder='email' name='email' value={email} onChange={this.inputHandler}></input>
          <input type='text' placeholder='web' name='web' value={web} onChange={this.inputHandler}></input>
          <input type='text' placeholder='eligibility' name='eligibility' value={eligibility} onChange={this.inputHandler}></input>
          <input type='text' placeholder='description' name='description' value={description} onChange={this.inputHandler}></input>

          {dayArr.map((d,i)=>{
            return <>
              <strong key={i} value={d} name='day'>{d}</strong>

              <select onChange={this.openHandler} name='opening'>
                {time.map((t,i)=>{
                  return <option  key={i} value={t} >{t}am</option>
                })}
              </select>
              to
              <select onChange={this.closingHandler} name='closing'>
                {time.map((t,i)=>{
                  return <option key={i} value={t} >{t}pm</option>
                })}
              </select>
            </>
          })}
          <button type='Submit' onClick={this.submitHandler}>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddService
