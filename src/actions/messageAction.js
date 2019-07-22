import {GET_MESSAGES, SEND_MESSAGE, CLEAN_MESSAGE, SET_CURRENT_ROOM_ID} from './types';

export function getMessages(roomId){
	// console.log('tes')
	return function(dispatch, getState){
    // this.setState({messages: []});
    const currentUser = getState().user.currentUser;
    let temp = [];
    return currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onMessage: message => {
          dispatch({
            type: GET_MESSAGES,
            payload: {
              messages: [...getState().message.messages, message]
            }
          });
        }
      }
    })
    .then(room => {
      dispatch({
        type: SET_CURRENT_ROOM_ID,
        payload: {
          currentRoomId: roomId
        }
      })
    })
    .catch(err => console(err));
  }
}

export function cleanMessage(){
	return function(dispatch, getState){
		return dispatch({
			type: CLEAN_MESSAGE
		})
	}
}

export function sendMessage(text){
  return function(dispatch, getState){
    return getState().user.currentUser.sendMessage({
      text
    });
    return dispatch({
      type: SEND_MESSAGE,
      // payload: {
      //   text
      // }
    })
  }
	
}