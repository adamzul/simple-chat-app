import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createRoom, getRooms} from '../actions/roomAction';

class NewRoomForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			roomName: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e){

		this.setState({
			roomName: e.target.value
		});
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.createRoom(this.state.roomName);
		this.props.getRooms();
		this.setState({
			roomName: ''
		});
	}

	render() {
		return (
			<div className="new-room-form">
				<form onSubmit={this.handleSubmit}>
					<input value={this.state.roomName} onChange={this.handleChange} type="text" placeholder="new room" required />
					<button  id="create-room-btn" type="submit">+</button>	
				</form>
			</div>
		);
	}
}



export default connect(null, {createRoom, getRooms})(NewRoomForm);