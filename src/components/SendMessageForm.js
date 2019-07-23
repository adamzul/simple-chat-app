import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../actions/messageAction';

class SendMessageForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			message: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e){
		this.setState({message: e.target.value});
		// console.log(this.state.message);

	}

	handleSubmit(e){
		e.preventDefault();
		console.log(this.state.message);
		this.props.sendMessage(this.state.message);
		this.setState({
			message: ''
		})
	}

	render() {
		return (
			<form className='send-message-form'  onSubmit={this.handleSubmit} >
				<input 
				disabled={this.props.currentRoomId == ''} 
				value={this.state.message} 
				placeholder="text" 
				type="text" 
				name="massage" 
				onChange={this.handleChange} />
			</form>
		);
	}
}
const mapStateToProps = state => ({
	message: state.message.message,
	currentRoomId: state.room.currentRoomId
});

export default connect(mapStateToProps, {sendMessage})(SendMessageForm)