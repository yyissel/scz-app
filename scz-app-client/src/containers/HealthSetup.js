import React, { Component } from "react";
import"./HealthSetup.css";
import { Auth } from "aws-amplify";
import {
	Button,
	Form,
	FormGroup,
	FormControl,
	ControlLabel
} from "react-bootstrap";

export default class ParticipantSetup extends Component {
	constructor(props) {
		super(props); 

		this.handleCheckSleep = this.handleCheckSleep.bind(this);
		this.handleCheckFood = this.handleCheckFood.bind(this);
		this.handleCheckActivity = this.handleCheckActivity.bind(this);
		this.handleCheckHeart = this.handleCheckHeart.bind(this);
		this.handleCheckWeight = this.handleCheckWeight.bind(this);	
		this.handleCheckLocation = this.handleCheckLocation.bind(this);
		this.handleCheck247 = this.handleCheck247.bind(this);
		this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
		this.handleChangeEndTime = this.handleChangeEndTime.bind(this);
		
		this.state = {
			userId:"",
			checkSleep: false,
			checkFood: false,
			checkActivity: false,
			checkHeart: false,
			checkWeight: false,
			checkLocation: false,
			check247: false,
			startTime: null,
			endTime: null
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
	handleCheckSleep() {
		this.setState({ checkSleep: !this.state.checkSleep });
	}
	handleCheckFood() {
		this.setState({ checkFood: !this.state.checkFood });
	}
	handleCheckActivity() {
		this.setState({ checkActivity: !this.state.checkActivity });
		console.log(this.state.checkActivity);
	}
	handleCheckHeart() {
		this.setState({ checkHeart: !this.state.checkHeart });
	}
	handleCheckWeight() {
		this.setState({ checkWeight: !this.state.checkWeight});
	}
	handleCheckLocation() {
		this.setState({ checkLocation: !this.state.checkLocation});
	}
	handleCheck247() {
		this.setState({ check247: !this.state.check247});
	}
	async handleChangeStartTime(event) {
		this.setState({ startTime: event.target.value });
	}
	async handleChangeEndTime(event) {
    this.setState({ endTime: event.target.value });
	}
	
	/*submit to api*/
	handleSubmit(event) {
	
		fetch("/api/participant/" + this.state.userId, {
			method: "PUT",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"check_sleep": this.state.checkSleep,
				"check_food": this.state.checkFood,
				"check_activity": this.state.checkActivity,
				"check_heart": this.state.checkHeart,
				"check_weight": this.state.checkWeight,
				"check_location": this.state.checkLocation,
				'check_247': this.state.check247,
				"start_time": this.state.startTime,
				"end_time": this.state.endTime
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
		<div className="HealthSetup">
			<Form id="health-studies" >

				<h3>Select the studies you would like to participate in:</h3>
				<FormGroup>
					<ControlLabel>
						<input 
							type="checkbox" 
							name="sleep" 
							onChange={this.handleCheckSleep}
						/> 
						sleep
					</ControlLabel>
					<br/>
					<ControlLabel>
						<input 
							type="checkbox" 
							name="food" 
							onChange={this.handleCheckFood}
						/>
						food and water logs
					</ControlLabel> 
					<br/>
					<ControlLabel>
						<input 
							type="checkbox" 
							name="activity" 
							onChange={this.handleCheckActivity}
						/>
						activity and exercise
					</ControlLabel>
					<br/>
					<ControlLabel>
						<input 
							type="checkbox" 
							name="heart" 
							onChange={this.handleCheckHeart}
						/>
						heart rate
					</ControlLabel>
					<br/>
					<ControlLabel>
						<input 
							type="checkbox" 
							name="weight" 
							onChange={this.handleCheckWeight}
						/>
						weight
					</ControlLabel>
					<br/>
					<ControlLabel>
						<input 
							type="checkbox" 
							name="location" 
							onChange={this.handleCheckLocation}
						/>
						location and GPS
					</ControlLabel>
					<br/>
				</FormGroup>
				<h3>When would you like to share?</h3>
				<FormGroup>
					
					<br/>
					<ControlLabel>
						<input 
						type="checkbox" 
						name="sleep" 
						onChange={this.handleCheck247} 
						/>
						24/7
					</ControlLabel>

					<br/>
					<ControlLabel>Start Time?</ControlLabel>
					<FormControl 
						name="start"
						type="time"
						onChange={this.handleChangeStartTime} 
					/>
					<ControlLabel>End Time?</ControlLabel>
					<FormControl 
						name="end"
						type="time"
						onChange={this.handleCheckEndTime} 
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
