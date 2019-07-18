import Chatkit from '@pusher/chatkit-client';
import {GET_CURRENT_USER} from '../actions/types';
import {tokenUrl, instanceLocator} from '../config';

const initialState = {
	currentUser: null
}
export default function(state = initialState, action){
	switch(action.type){
		case GET_CURRENT_USER:
			state = {
				currentUser: action.currentUser
			}
	    return state;
	  default:
	  	return state;
	}
}