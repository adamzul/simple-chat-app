import React, { Component } from 'react';

export default class SendMessageForm extends Component {
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
	}

	render() {
		return (
			<form className='send-message-form'  onSubmit={this.handleSubmit} >
				<input placeholder="text" type="text" name="massage" onChange={this.handleChange} />
			</form>
		);
	}
}
