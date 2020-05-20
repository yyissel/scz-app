import React, { Component } from "react";
import "./Setup.css";
import participants from "../../images/participants.png";
import researchers from "../../images/researchers.png";

import Button from 'react-bootstrap/lib/Button';
import { Link, NavLink } from "react-router-dom";
import { Auth } from "aws-amplify";

export default class Setup extends Component {
  constructor(props){
    super(props);

    this.state ={
      userId:"",
      name:""
    };
  }
  async componentDidMount(){
     /* GET user's name */
     try {
      this.setState({
        userId:await(await Auth.currentUserInfo()).attributes.email
      })
     
    } catch(e) {
      if (e !== 'No current user') {
        // alert(e);
      }
    }
    fetch("/api/participant/"+this.state.userId, {
    method: "GET"
    })    
    .then(response => response.json())
    .then(participant => {
    this.setState({name:participant.first_name})
    });
  }

  render() {
    return (
      <div className="Setup">
        <div className="greeting">
          <h1>{"WELCOME "+ this.state.name.toUpperCase()+"!"}</h1>
        </div>
        <div className="choose">
        <div className="type">
          <img src={participants} alt="participants"/>
          <Link to="/profile-setup/participant">
            <Button variant="primary" size="lg" active>
              Participant              
            </Button>
          </Link>
        </div>

        <div className="type">
          <img src={researchers} alt="researchers"/>
          <NavLink to="/profile-setup/researcher">
            <Button variant="primary" size="lg" active>
                Researcher
            </Button>
          </NavLink>
        </div>

        </div>
        
      </div>
    );
  }
}