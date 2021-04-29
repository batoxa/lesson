import { connect } from 'react-redux';
import { setUsersActionCreator, followUserActionCreator, unfollowUserActionCreator, setUsersTotalCountActionCreator, setActivePageActionCreator } from '../../redux/users-reducer';
import Users from './UsersC';


let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      activePage: state.usersPage.activePage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {

      setUsersTotalCount: (totalCount) => {
         dispatch(setUsersTotalCountActionCreator(totalCount));
      },
      setActivePage: (pageNumber) => {
         dispatch(setActivePageActionCreator(pageNumber));
      },
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;