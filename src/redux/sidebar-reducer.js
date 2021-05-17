import { userAPI } from "../components/api/api";

const SET_FRIENDS = "SET-FRIENDS";
const ADD_FRIENDS = "ADD-FRIENDS";
const DELETE_FRIENDS = "DELETE-FRIENDS";

const initialState = {
    friendData: [
        { id: 1, name: "Wise", photos: { small: "https://2.bp.blogspot.com/-P1KHVukRJpE/V8Tz6r0eZ8I/AAAAAAACFW0/I0r732kp2wgPSqXBFl0i_DkCndzrY5rLACLcB/s320/Wise.png" } },
        { id: 2, name: "Total", photos: { small: "https://media.istockphoto.com/vectors/cow-icon-vector-id652692584" } },
        { id: 3, name: "Tendo", photos: { small: "https://yt3.ggpht.com/ytc/AAUvwnhHlQn5yh79uOtvDHMJmYXZ3sXnqycPw4SHFMRB=s900-c-k-c0x00ffffff-no-rj" } }
    ],
    friends: [],
};

const sidebarReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_FRIENDS:
            return {
                ...state,
                friends: [...action.friends],
            };
        case ADD_FRIENDS:
            return {
                ...state,
                friends: [...action.friends],
            };
        case DELETE_FRIENDS:
            return {
                ...state,
                friends: state.friends.filter((friends) => (friends.id !== action.userId))
            };

        default:
            return state;

    }
};

export const setFriends = (friends) => ({ type: SET_FRIENDS, friends });
export const addFriends = (userId) => ({ type: ADD_FRIENDS, userId });
export const deleteFriends = (userId) => ({ type: DELETE_FRIENDS, userId });

export const getFriends = () => {
    return (dispatch) => {
        userAPI.getFriends().then((data) => {
            dispatch(setFriends(data.items));
            console.log(data.items);
        });
    };
};


export default sidebarReducer;



