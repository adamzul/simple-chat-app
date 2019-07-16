import React from 'react';
import Chatkit from '@pusher/chatkit-client';
import {tokenUrl, instanceLocator} from './config';
import MessageList from './components/MessageList';
// import RoomList from './components/RoomList';
import SendMessageForm from './components/SendMessageForm';
// import NewRoomForm from './components/NewRoomForm';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount(){
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'adam',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });

    chatManager.connect()
    .then(currentUser => {
      this.currentUser = currentUser;
      this.currentUser.subscribeToRoom({
        roomId: '20091467',
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
    });
  }

  sendMessage(text){
    this.currentUser.sendMessage({
      text,
      roomId: '20091467'
    });
  }

  render(){
    return (
      <div className="app">
        <MessageList message={this.state.messages} />
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
