import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';



import { Form, Col, Container } from 'react-bootstrap'


const time = [1,2,3,4,5,6,7,8,9,10,11,12]
const dayArr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

class AddService extends Component {
  state = {
    name:"",
    address: "",
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
    const { name, address, city, state, zip, phone, email, web, day, hours, eligibility, description } = this.state
    return(
      <div className='servicePageContainer'>
      <Container>


        <Form
          className="serviceContainer" 
          onSubmit={this.submitHandler}>
         
          <Form.Group>
            <Form.Label className='display'>Organization Name</Form.Label>
              <input
                className="input" 
                type='text' 
                name='name' 
                value={name} 
                onChange={this.inputHandler}/>
          </Form.Group>
        
          <Form.Group>
            <Form.Label className='display'>Street Address</Form.Label>
              <input
                className="input" 
                type='address' 
                name='address' 
                value={address} 
                onChange={this.inputHandler}/>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label className='display'>City</Form.Label>
                <input 
                  className="input"
                  type='city' 
                  name='city' 
                  value={city} 
                  onChange={this.inputHandler}/>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label className='display'>State</Form.Label>
                <Form.Control as='select'> 
                  <option>Choose...</option>

                </Form.Control>
                <input 
                  type='state' 
                  placeholder='state'
                  name='state' 
                  value={state} 
                  onChange={this.inputHandler}/>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label className='display'>Zip</Form.Label>
                <input
                  className="zipInput" 
                  type='text' 
                  placeholder='zip' 
                  name='zip' 
                  value={zip} 
                  onChange={this.inputHandler}/>
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Label className='display'>Phone</Form.Label>
              <input
                className="input" 
                type='phone'  
                name='phone' 
                value={phone} 
                onChange={this.inputHandler}/>
          </Form.Group>
        
          
          <Form.Group>
            <Form.Label className='display'>Email</Form.Label>
              <input 
                className='input'
                type='email' 
                name='email' 
                value={email} 
                onChange={this.inputHandler}/>
          </Form.Group>
          
          <Form.Group>
            <Form.Label className='display'>Website</Form.Label>
              <input 
                className='input'
                type='text'  
                name='web' 
                value={web} 
                onChange={this.inputHandler}/>  
          </Form.Group>
          
          <Form.Group>
            <Form.Label className='display'>Hours</Form.Label>
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

          </Form.Group>
          
           
       

        
        
      

              
          <Form.Group>
            <Form.Label className='display'>Eligibility Requirements: Who in the community do you serve?</Form.Label>
              <input
                className='noteDisplay' 
                type='text' 
                name='eligibility' 
                value={eligibility} 
                onChange={this.inputHandler}/>
          </Form.Group>

          <Form.Group>
            <Form.Label className="display"> Services Provided</Form.Label>
              <input
                className='noteDisplay'  
                type='text' 
                name='description' 
                value={description} 
                onChange={this.inputHandler}/>
          </Form.Group>

         
          <button
            className="serviceButton" 
            type='Submit' 
            onClick={this.submitHandler}>Submit</button>
        </Form>
      </Container>
      </div>
    )
  }
}

export default AddService
