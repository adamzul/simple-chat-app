import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getCurrentUser} from '../actions/userAction';
import {getRooms} from '../actions/roomAction';
// import mapUserDispatchToProps from '../mappers/mapUserDispatchToProps';

class Init extends Component {
	componentDidMount(){
		this.props.getCurrentUser().then(() => {this.props.getRooms()});
		
	}
	render() {
		return (
			<div></div>
		);
	}
}
export default connect(null, {getCurrentUser, getRooms})(Init);