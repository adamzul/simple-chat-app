import {combineReducers} from 'redux';
import messageReducer from './messageReducer';
import userReducer from './userReducer';
import roomReducer from './roomReducer';

export default combineReducers({
	message: messageReducer,
	user: userReducer,
	room: roomReducer,
});