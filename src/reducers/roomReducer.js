import {GET_ROOMS, POST_ROOM, SUBSCRIBE_ROOM, SET_CURRENT_ROOM_ID} from '../actions/types';

const initialState = {
	joinableRooms: [],
	joinedRooms: [],
	currentRoomId: ''
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
		case SET_CURRENT_ROOM_ID:
			console.log(action.payload.roomId)
			state = {
				...state,
				currentRoomId: action.payload.roomId
			}
		default:
			return state;
	}
}