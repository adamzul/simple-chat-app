import React from 'react';
import {Provider, connect} from 'react-redux';

import Chatkit from '@pusher/chatkit-client';
import {tokenUrl, instanceLocator} from './config';
import store from './store';
// import mapUserDispatchToProps from './mappers/mapUserDispatchToProps';

import MessageList from './components/MessageList';
import RoomList from './components/RoomList';
import SendMessageForm from './components/SendMessageForm';
import NewRoomForm from './components/NewRoomForm';
import Init from './components/Init';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      roomId: null,
      joinableRooms: [],
      joinedRooms: []
    };
    this.sendMessage = this.sendMessage.bind(this);
    // this.subscribeToRoom = this.subscribeToRoom.bind(this);
    // this.getRooms = this.getRooms.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  componentDidMount(){
    // const chatManager = new Chatkit.ChatManager({
    //   instanceLocator,
    //   userId: 'anon',
    //   tokenProvider: new Chatkit.TokenProvider({
    //     url: tokenUrl
    //   })
    // });

    // chatManager.connect()
    // .then(currentUser => {
    //   this.currentUser = currentUser;

    //   this.getRooms();
      
    //   // this.subscribeToRoom();
      

    // });

  }

  // getRooms(){
  //   this.currentUser.getJoinableRooms()
  //   .then(joinableRooms => {
  //     this.setState({
  //       joinableRooms,
  //       joinedRooms: this.currentUser.rooms
  //     })
  //   })
  //   .catch(err => console(err));
  // }

  // subscribeToRoom(roomId){
  //   this.setState({messages: []});
  //   this.currentUser.subscribeToRoom({
  //     roomId: roomId,
  //     // messageLimit: 10,
  //     hooks: {
  //       onMessage: message => {
  //         console.log('message.text: ', message.text);
  //         this.setState({
  //           messages: [...this.state.messages, message]
  //         })
  //       }
  //     }
  //   })
  //   .then(room => {
  //     this.setState({roomId: room.id});
  //     this.getRooms();
  //   })
  //   .catch(err => console(err));
  // }

  sendMessage(text){
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    });
  }

  createRoom(name){
    this.currentUser.createRoom({
      name
    })
    .then(room => this.subscribeToRoom(room.id))
    .catch(err => console.log("error create room"));
  }

  render(){
    return (
      <Provider store={store}>
      <div className="app">
        <Init />
          <RoomList />
          <MessageList />
          <SendMessageForm />
        {/*
        <NewRoomForm createRoom={this.createRoom} />
        
      */}
      </div>
      </Provider>
    );
  }
}

export default (App);
