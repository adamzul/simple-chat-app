import {FETCH_MESSAGE, NEW_MESSAGE} from './types';

function fetchMessage(){

}

function sendMessage(text){
	this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    });
}