const SET_USERS = 'SET-USERS';
const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_ACTIVE_PAGE = 'SET-ACTIVE-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const GET_NEXT_PAGE = 'GET-NEXT-PAGE';
const GET_PREV_PAGE = 'GET-PREV-PAGE';
const IS_FETCHING = 'IS-FETCHING';


const initialState = {
   users: [
      //    {
      //       id: 1, fullName: "Wise", avatar: "https://2.bp.blogspot.com/-P1KHVukRJpE/V8Tz6r0eZ8I/AAAAAAACFW0/I0r732kp2wgPSqXBFl0i_DkCndzrY5rLACLcB/s320/Wise.png",
      //       location: { city: "Moscow", country: "Russia" },
      //       status: "Pro",
      //       followed: true
      //    },
      //    {
      //       id: 2, fullName: "Total", avatar: "https://media.istockphoto.com/vectors/cow-icon-vector-id652692584",
      //       location: { city: "Klimovsk", country: "Russia" },
      //       status: "Junior",
      //       followed: true
      //    },
      //    {
      //       id: 3, fullName: "ZloySky", avatar: "https://yt3.ggpht.com/ytc/AAUvwnjN-7ImWo3a5BUbV-LRQrYFGTjHG_vctOYz4NCf=s900-c-k-c0x00ffffff-no-rj",
      //       location: { city: "Saratov", country: "Russia" },
      //       status: "Jude",
      //       followed: false
      //    },
      //    {
      //       id: 4, fullName: "Skawolf", avatar: "https://yt3.ggpht.com/a/AATXAJxdL0vOU2JGwmuP9TlOhXlCf8Pm9LHVk18YE1Xo=s900-c-k-c0x00ffffff-no-rj",
      //       location: { city: "Ryazan", country: "Russia" },
      //       status: "Newbee",
      //       followed: false
      //    },
      //    {
      //       id: 5, fullName: "Tendo", avatar: "https://yt3.ggpht.com/ytc/AAUvwnhHlQn5yh79uOtvDHMJmYXZ3sXnqycPw4SHFMRB=s900-c-k-c0x00ffffff-no-rj",
      //       location: { city: "Komunarka", country: "Russia" },
      //       status: "Middle",
      //       followed: false
      //    }
   ],
   pageSize: 5,
   totalUsersCount: 0,
   activePage: 2366,
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

export const setUsersTotalCountActionCreator = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const setActivePageActionCreator = (pageNumber) => ({ type: SET_ACTIVE_PAGE, pageNumber });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const followUserActionCreator = (userId) => ({ type: FOLLOW_USER, userId });
export const unfollowUserActionCreator = (userId) => ({ type: UNFOLLOW_USER, userId });
export const getNextPageActionCreator = () => ({ type: GET_NEXT_PAGE });
export const getPrevPageActionCreator = () => ({ type: GET_PREV_PAGE });
export const isFetchingActionCreator = (isLoading) => ({ type: IS_FETCHING, isLoading });

export default usersReducer;