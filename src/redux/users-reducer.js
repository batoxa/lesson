const SET_USERS = 'SET-USERS';
const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_ACTIVE_PAGE = 'SET-ACTIVE-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const GET_NEXT_PAGE = 'GET-NEXT-PAGE';
const GET_PREV_PAGE = 'GET-PREV-PAGE';
const IS_FETCHING = 'IS-FETCHING';


const initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   activePage: 1,
   isLoading: false
}

const usersReducer = (state = initialState, action) => {

   switch (action.type) {

      case IS_FETCHING:
         return {
            ...state,
            isLoading: action.isLoading
         };

      case GET_PREV_PAGE:
         if (state.activePage > 1) {
            return {
               ...state,
               activePage: state.activePage - 1
            }
         }
         return {
            ...state
         };

      case GET_NEXT_PAGE:
         if (state.activePage < (Math.ceil(state.totalUsersCount / state.pageSize))) {
            return {
               ...state,
               activePage: state.activePage + 1
            }
         }
         return {
            ...state

         };

      case SET_TOTAL_COUNT:
         return {
            ...state,
            totalUsersCount: action.totalCount
         };

      case SET_ACTIVE_PAGE:
         return {
            ...state,
            activePage: action.pageNumber
         };

      case FOLLOW_USER:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: true }
               }
               return user
            })
         };

      case UNFOLLOW_USER:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: false }
               }
               return user
            })
         };
      case SET_USERS:
         return {
            ...state,
            users: [...action.users]
         };

      default:
         return state;
   }
};

export const setUsersTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const setActivePage = (pageNumber) => ({ type: SET_ACTIVE_PAGE, pageNumber });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const followUser = (userId) => ({ type: FOLLOW_USER, userId });
export const unfollowUser = (userId) => ({ type: UNFOLLOW_USER, userId });
export const getNextPage = () => ({ type: GET_NEXT_PAGE });
export const getPrevPage = () => ({ type: GET_PREV_PAGE });
export const isFetching = (isLoading) => ({ type: IS_FETCHING, isLoading });

export default usersReducer;