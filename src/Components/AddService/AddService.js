import React, { Component } from 'react';


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
  	hours:[],
  	eligibility:"",
  	description:""
  }

  inputHandler = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  render(){
    const { name, city, state, zip, phone, email, web, day, hours, eligibility, description } = this.state
    return(
      <div>
        <form>
          <input type='text' placeholder='name' name='name' value={name} onChange={this.inputHandler}></input>
          <input type='text' placeholder='city' name='city' value={city} onChange={this.inputHandler}></input>
          <input type='text' placeholder='state' name='state' value={state} onChange={this.inputHandler}></input>
          <input type='text' placeholder='zip' name='zip' value={zip} onChange={this.inputHandler}></input>
          <input type='text' placeholder='phone' name='phone' value={phone} onChange={this.inputHandler}></input>
          <input type='text' placeholder='email' name='email' value={email} onChange={this.inputHandler}></input>
          <input type='text' placeholder='web' name='web' value={web} onChange={this.inputHandler}></input>
          <input type='text' placeholder='day' name='day' value={day} onChange={this.inputHandler}></input>
          <input type='text' placeholder='hours' name='hours' value={hours} onChange={this.inputHandler}></input>
          <input type='text' placeholder='eligibility' name='eligibility' value={eligibility} onChange={this.inputHandler}></input>
          <input type='text' placeholder='description' name='description' value={description} onChange={this.inputHandler}></input>

          {dayArr.map((d,i)=>{
            return d

          })}

          <select>
            {time.map((t,i)=>{
              return <option key={i}>{t}am</option>
            })}
          </select>

          to

          <select>
            {time.map((t,i)=>{
              return <option key={i}>{t}pm</option>
            })}
          </select>

        </form>
      </div>
    )
  }
}

export default AddService
