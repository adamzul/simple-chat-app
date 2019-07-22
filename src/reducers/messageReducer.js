import {GET_MESSAGES, CLEAN_MESSAGE, SEND_MESSAGE} from '../actions/types';

const initialState = {
	messages: []
};

export default function(state = initialState, action){
	switch(action.type){
		case GET_MESSAGES:
		// console.log([...action.payload.messages])
			state = {
				...state,
				messages: [...action.payload.messages]
			};
			return state;
		case CLEAN_MESSAGE:
			state = {
				...state,
				messages: []
			};
			return state;
		case SEND_MESSAGE:
			state = {
				...state,
				// messages: [...action.payload.messages]
			}
			return state;
		default:
			return state;
		
	}
}