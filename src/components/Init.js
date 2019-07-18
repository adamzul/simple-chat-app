import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getCurrentUser} from '../actions/userAction';
// import mapUserDispatchToProps from '../mappers/mapUserDispatchToProps';

class Init extends Component {
	componentDidMount(){
		this.props.getCurrentUser();
	}
	render() {
		return (
			<div></div>
		);
	}
}
export default connect(null, {getCurrentUser})(Init);