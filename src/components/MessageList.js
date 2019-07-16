import React, { Component } from 'react';
import Message from './Message';

const DUMMY_DATA = [
	{
		senderId: 'adam',
		text: 'how are you?'
	},
	{
		senderId: 'adam',
		text: 'how are you?'
	}
];
export default class MessageList extends Component {

	render() {
		let temp = this.props.message.map((item, id) => {
			return (
				<Message key={id} username={item.senderId} text={item.text} />
			);
		})
		return (
			<div className="message-list">
				{temp}
			</div>
		);
	}
}
