import {GET_MESSAGES, CLEAN_MESSAGE} from '../actions/types';

const initialState = {
	messages: []
};

export default function(state = initialState, action){
	switch(action.type){
		case GET_MESSAGES:
		// console.log([...action.payload.messages])
			state = {
				messages: [...action.payload.messages]
			};
			return state;
		case CLEAN_MESSAGE:
			state = {
				messages: []
			};
			return state;
		default:
			return state;
		
	}
}