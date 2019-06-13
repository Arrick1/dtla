import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';



import { Form, Col, Container } from 'react-bootstrap'


const time = [1,2,3,4,5,6,7,8,9,10,11,12]
const dayArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const stateAbbreviations = ['AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA', 'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA', 'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND', 'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT','VT','VI','VA','WA','WV','WI','WY'];

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
  	description:"",
    categories:''
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

  categorieHandler = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  render(){
    const { name, address, city, state, zip, phone, email, web, day, hours, eligibility, description, categories } = this.state
    return(
      <div className='servicePageContainer'>
      <div></div>
      <Container>

      <select name='categories' onChange={this.categorieHandler}>
        <option value='food'>food</option>
        <option value='selfParking'>Self Parking</option>
        <option value='shower'>shower</option>
        <option value='jobs'>jobs</option>
      </select>

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

          <Form.Row>
          <Form.Group>
            <Form.Label className='display'>Hours:</Form.Label>
            {
              dayArr.map((d,i)=>{
                return <>
                <Col>
                  <strong key={i} value={d} name='day'>{d}</strong>
                  <select onChange={this.openHandler} name='opening'>
                {time.map((t,i)=>{
                  return <option  key={i} value={t} >{t}am</option>
                })}
              </select>
              to
            </Col>
              <Col>
              <select onChange={this.closingHandler} name='closing'>
                {time.map((t,i)=>{
                  return <option key={i} value={t} >{t}pm</option>
                })}
              </select>
              </Col>
            </>
          })}

          </Form.Group>

          </Form.Row>









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
