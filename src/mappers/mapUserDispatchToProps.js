// import UserAction from '../actions/UserAction';
import {getCurrentUser} from '../actions/UserAction';

const mapUserDispatchToProps = (dispatch) => {
	return {
		getCurrentUser: () => {
			dispatch(getCurrentUser())
		}
	}
}
export default mapUserDispatchToProps;