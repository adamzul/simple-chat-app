import {FETCH_ROOMS, NEW_ROOM} from './types';

const initialState = {
	rooms: []
}

export function(state = initialState, action){
	switch(action.type){
		case FETCH_ROOMS:
			this.currentUser.getJoinableRooms()
		    .then(joinableRooms => {
		      this.setState({
		        joinableRooms,
		        joinedRooms: this.currentUser.rooms
		      })
		    })
		    .catch(err => console(err));
			state = {
				rooms: action.rooms
			};
			return state;
		case NEW_ROOM:
			return state;
		default:
			return state;
	}
}