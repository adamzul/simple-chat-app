import {GET_ROOMS, SUBSCRIBE_ROOM, SET_CURRENT_ROOM_ID, CREATE_ROOM} from './types';


export function getRooms(){
  return function(dispatch, getState){
    const currentUser = getState().user.currentUser;
    currentUser.getJoinableRooms()
    .then(joinableRooms => {

      return dispatch({
        type: GET_ROOMS,
        joinableRooms,
        joinedRooms: currentUser.rooms
      });
    })
    .catch(err => console(err));
  }
}

export function setCurrentRoomId(id){
  return function(dispatch){
    return dispatch({
      type: SET_CURRENT_ROOM_ID,
      payload: {
        roomId: id
      }
    })
  }
}

export function createRoom(name){
  return function(dispatch, getState){
    getState().user.currentUser.createRoom({
      name
    })
    .then(() => {
      return dispatch({
        type: CREATE_ROOM
      });
    })
    // .then(room => this.subscribeToRoom(room.id))
    .catch(err => console.log("error create room"));
  }
}

// export function subscribeRoom(roomId){
//   return function(dispatch, getState){
//     // this.setState({messages: []});
//     const currentUser = getState().user.currentUser;
//     const temp = [];
//     currentUser.subscribeToRoom({
//       roomId: roomId,
//       // messageLimit: 10,
//       hooks: {
//         onMessage: message => {
//           // console.log('message.text: ', message.text);
//           temp = [...temp, message];
//           // this.setState({
//           //   messages: [...this.state.messages, message]
//           // })
//         }
//       }
//     })
//     .then(room => {
//       return dispatch({
//         type: SUBSCRIBE_ROOM,
//         payload: {
//           messages: [...temp]
//         }
//       });
//       // this.setState({roomId: room.id});
//       // this.getRooms();
//     })
//     .catch(err => console(err));
//   }
// }