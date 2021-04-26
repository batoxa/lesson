import { connect } from 'react-redux';
import { setUsersActionCreator, followUserActionCreator, unfollowUserActionCreator } from '../../redux/users-reducer';
import Users from './Users';


let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
   return {
      setUsers: (users) => {
         dispatch(setUsersActionCreator(users));
      },
      followUser: (userId) => {
         dispatch(followUserActionCreator(userId));
      },
      unfollowUser: (userId) => {
         dispatch(unfollowUserActionCreator(userId));
      }
   }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;