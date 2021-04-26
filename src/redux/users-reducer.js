const SET_USERS = 'SET-USERS';
const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';


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
   ]
}

const usersReducer = (state = initialState, action) => {

   switch (action.type) {

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
            ...state, users: [...state.users, ...action.users]
         };

      default:
         return state;
   }
};

export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const followUserActionCreator = (userId) => ({ type: FOLLOW_USER, userId });
export const unfollowUserActionCreator = (userId) => ({ type: UNFOLLOW_USER, userId });

export default usersReducer;