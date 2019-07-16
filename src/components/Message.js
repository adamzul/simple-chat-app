import React, { Component } from 'react';

export default class Message extends Component {
	render() {
		return (
			<div key={this.props.id} className='message'>
				<div className='message-username'>{this.props.username}</div>
				<div className='message-text'>{this.props.text}</div>
			</div>
		);
	}
}
