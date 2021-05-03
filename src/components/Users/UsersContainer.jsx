import { connect } from 'react-redux';
import { setUsers, followUser, unfollowUser, setUsersTotalCount, setActivePage, getNextPage, getPrevPage, isFetching, toggleIsFollow } from '../../redux/users-reducer';
import Users from './Users';


let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      activePage: state.usersPage.activePage,
      isLoading: state.usersPage.isLoading,
      isFollow: state.usersPage.isFollow
   }
}

const UsersContainer = connect(mapStateToProps, {
   isFetching,
   getPrevPage,
   getNextPage,
   setUsersTotalCount,
   setActivePage,
   setUsers,
   followUser,
   unfollowUser,
   toggleIsFollow
})
   (Users);

export default UsersContainer;


