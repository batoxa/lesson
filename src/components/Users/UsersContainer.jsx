import { connect } from 'react-redux';
import { setUsers_ActionCreater, followUser_ActionCreater, unfollowUser_ActionCreater } from '../../../redux/users-reducer';
import Users from './Users';


let mapStateToProps = (state) => {
   return {
      users: state.users
    }
}

let mapDispatchToProps = (dispatch) => {
   return {
      setUsers: (users) => {
         dispatch(setUsers_ActionCreater(users));
      },
      followUser: (userId) => {
         dispatch(followUser_ActionCreater(userId));
      },
      unfollowUser: (userId) => {
         dispatch(unfollowUser_ActionCreater(userId));
      }
   }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;