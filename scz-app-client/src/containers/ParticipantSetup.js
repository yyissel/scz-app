import React, { Component } from "react";
import "./ParticipantSetup.css";
import {
  Button,
  Form,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import { Auth } from "aws-amplify";

export default class ParticipantSetup extends Component {
  constructor(props) {
    super(props);
    
   
    /*method binding*/
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleChangeDOB = this.handleChangeDOB.bind(this);
    this.handleChangeZipCode = this.handleChangeZipCode.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);

    /*participant states */
    this.state = {
      userId: "",
      firstName: "",
      gender: "female",
      dob: "",
      zipCode: ""
    };
  }
 
  async componentDidMount() {
    try {
      this.setState({
        userId:await(await Auth.currentUserInfo()).attributes.email
      })
     
    } catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  }
  /*methods for handling state changes */
  async handleChangeFirstName(event) {
    this.setState({ firstName: event.target.value }, () =>
      console.log(this.state.firstName)
    );
  }
  async handleChangeGender(event) {
    this.setState({ gender: event.target.value }, () =>
      console.log(this.state.gender)
    );
  }
  async handleChangeDOB(event) {
    this.setState({ dob: event.target.value }, () =>
      console.log(this.state.dob)
    );
  }
  async handleChangeZipCode(event) {
    this.setState({ zipCode: event.target.value }, () =>
      console.log(this.state.zipCode)
    );
  }

  /*submit to api*/
  handleSubmit(event) {
    fetch("/api/participant/", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "user_id": this.state.userId,
        "first_name": this.state.firstName,
        "gender": this.state.gender,
        "dob": this.state.dob,
        "zip_code": this.state.zipCode
      })
    });
    try {
      this.props.history.push("/profile-setup/participant/health");
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    return (
      <div className="ParticipantSetup">
        <Form id="sign-up">
        
          <FormGroup>
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              name="firstName"
              type="text"
              placeholder="ex: John"
              onChange={this.handleChangeFirstName}
            />
          </FormGroup>
          <FormGroup name="gender">
            <ControlLabel>Gender</ControlLabel>
            <FormControl 
              componentClass="select" 
              onChange={this.handleChangeGender}
              type="text"
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </FormControl>
          </FormGroup>

          <FormGroup name="dob">
            <ControlLabel>Date of Birth</ControlLabel>
            <FormControl 
                name="dob"
                type="date"
                onChange={this.handleChangeDOB}
              
            />
            </FormGroup>

            <FormGroup name="zip_code">
              <ControlLabel>Zip Code</ControlLabel>
              <FormControl 
                  name="zip_code"
                  type="number"
                  placeholder="ex: 00000"
                  onChange={this.handleChangeZipCode}
                  
              />
            </FormGroup>

          <Button 
            variant="primary" 
            onClick={this.handleSubmit.bind(this)}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
