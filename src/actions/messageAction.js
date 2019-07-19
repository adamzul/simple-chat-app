import {GET_MESSAGES, NEW_MESSAGE, CLEAN_MESSAGE} from './types';

export function getMessages(roomId){
	// console.log('tes')
	return function(dispatch, getState){
    // this.setState({messages: []});
    const currentUser = getState().user.currentUser;
    let temp = [];
    return currentUser.subscribeToRoom({
      roomId: roomId,
      // messageLimit: 10,
      hooks: {
        onMessage: message => {
        	console.log(1);
          // console.log('message.text: ', message.text);
          temp = [...temp, message];
          // this.setState({
          //   messages: [...this.state.messages, message]
          // })
        }
      }
    })
    .then(room => {
      console.log(2)

      return dispatch({
        type: GET_MESSAGES,
        payload: {
          messages: [...temp]
        }
      });
      // this.setState({roomId: room.id});
      // this.getRooms();
    })
    .catch(err => console(err));
  }
}

export function cleanMessage(){
	return function(dispatch, setState){
		return dispatch({
			type: CLEAN_MESSAGE
		})
	}
}

function sendMessage(text){
	this.currentUser.sendMessage({
    text,
    roomId: this.state.roomId
  });
}