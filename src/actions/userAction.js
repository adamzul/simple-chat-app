import Chatkit from '@pusher/chatkit-client';
import {tokenUrl, instanceLocator} from '../config';
import {GET_CURRENT_USER} from './types';
import {getRooms} from './roomAction';

export function	getCurrentUser(){
	return function(dispatch, getState){
		const chatManager = new Chatkit.ChatManager({
	    instanceLocator,
	    userId: 'anon',
	    tokenProvider: new Chatkit.TokenProvider({
	      url: tokenUrl
	    })
	  });

	  const state = chatManager.connect()
	  .then(currentUser => {
	    // this.currentUser = currentUser;
	    // this.getRooms();
	    // this.subscribeToRoom();
	    return dispatch({
				type: GET_CURRENT_USER,
	    	currentUser: currentUser
	    })
	    ;
	  });
	  return state;
	  // .then(() => {dispatch(getRooms())})

	  ;

	}
}
