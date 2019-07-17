import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';


export default class MessageList extends Component {

	componentWillUpdate(){
		const node = ReactDOM.findDOMNode(this);
		this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100  >= node.scrollHeight;
	}

	componentDidUpdate(){
		if(this.shouldScrollToBottom){
			const node = ReactDOM.findDOMNode(this);
			node.scrollTop = node.scrollHeight;
		}
	}

	render() {
		if(!this.props.roomId){
			return (<div className="message-list">
				<div className="join-room">&larr;join a room</div>
			</div>);
		}
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
