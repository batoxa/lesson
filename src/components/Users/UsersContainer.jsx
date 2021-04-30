import { connect } from 'react-redux';
import { setUsersActionCreator, followUserActionCreator, unfollowUserActionCreator, setUsersTotalCountActionCreator, setActivePageActionCreator,getNextPageActionCreator,getPrevPageActionCreator, isFetchingActionCreator } from '../../redux/users-reducer';
import Users from './Users';


let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      activePage: state.usersPage.activePage,
      isLoading: state.usersPage.isLoading
   }
}

let mapDispatchToProps = (dispatch) => {
   return {


      isFetching: (isLoading) => {
         dispatch(isFetchingActionCreator(isLoading));
      },
      getPrevPage: () => {
         dispatch(getPrevPageActionCreator());
      },
      getNextPage: () => {
         dispatch(getNextPageActionCreator());
      },
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