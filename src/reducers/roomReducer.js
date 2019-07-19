import {GET_ROOMS, POST_ROOM, SUBSCRIBE_ROOM} from '../actions/types';

const initialState = {
	joinableRooms: [],
	joinedRooms: []
}

export default function(state = initialState, action){
	switch(action.type){
		case GET_ROOMS:
			state = {
				joinableRooms: action.joinableRooms,
        		joinedRooms: action.joinedRooms
			}
			return state;
		case SUBSCRIBE_ROOM:
			state = {

			}
			return state;
		case POST_ROOM:
			return state;
		default:
			return state;
	}
}