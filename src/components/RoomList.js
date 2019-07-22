import React, { Component } from 'react';
import {connect} from 'react-redux';
import roomAction from '../actions/roomAction';
import {getMessages, cleanMessage} from '../actions/messageAction';

class RoomList extends Component {

	render() {
		const orderedRooms = [...this.props.rooms].sort((a, b) => a.id-b.id);
		return (
			<div className="rooms-list">
				<ul>
					<h3>your rooms</h3>
					{orderedRooms.map(room => {
						const active = this.props.roomId === room.id ? "active" : "";
						return (
							<li key={room.id} className={"room " + active}>
								<a onClick={() => {
									this.props.cleanMessage();
									this.props.getMessages(room.id);
								}} href="#"> # {room.name}</a>
							</li>
						)
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	rooms: [...state.room.joinableRooms, ...state.room.joinedRooms]
})

export default connect(mapStateToProps, {getMessages, cleanMessage})(RoomList);
