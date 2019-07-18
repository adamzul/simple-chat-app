import {GET_ROOMS} from './types';


export function getRooms(){
  return function(dispatch){
    this.currentUser.getJoinableRooms()
    .then(joinableRooms => {
      return dispatch({
        type: GET_ROOMS,
        joinedRooms,
        joinedRooms:
      })
      this.setState({
        joinableRooms,
        joinedRooms: this.currentUser.rooms
      })
    })
    .catch(err => console(err));
  }
}

export function subscribeToRoom(roomId){
  this.setState({messages: []});
  this.currentUser.subscribeToRoom({
    roomId: roomId,
    // messageLimit: 10,
    hooks: {
      onMessage: message => {
        console.log('message.text: ', message.text);
        this.setState({
          messages: [...this.state.messages, message]
        })
      }
    }
  })
  .then(room => {
    this.setState({roomId: room.id});
    this.getRooms();
  })
  .catch(err => console(err));
}