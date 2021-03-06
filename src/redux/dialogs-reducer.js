const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

const initialState = {
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "Yoooo" }
    ],
    dialogsData: [
        { id: 1, name: "Wise", avatar: "https://2.bp.blogspot.com/-P1KHVukRJpE/V8Tz6r0eZ8I/AAAAAAACFW0/I0r732kp2wgPSqXBFl0i_DkCndzrY5rLACLcB/s320/Wise.png" },
        { id: 2, name: "Total", avatar: "https://media.istockphoto.com/vectors/cow-icon-vector-id652692584" },
        { id: 3, name: "ZloySky", avatar: "https://yt3.ggpht.com/ytc/AAUvwnjN-7ImWo3a5BUbV-LRQrYFGTjHG_vctOYz4NCf=s900-c-k-c0x00ffffff-no-rj" },
        { id: 4, name: "Skawolf", avatar: "https://yt3.ggpht.com/a/AATXAJxdL0vOU2JGwmuP9TlOhXlCf8Pm9LHVk18YE1Xo=s900-c-k-c0x00ffffff-no-rj" },
        { id: 5, name: "Tendo", avatar: "https://yt3.ggpht.com/ytc/AAUvwnhHlQn5yh79uOtvDHMJmYXZ3sXnqycPw4SHFMRB=s900-c-k-c0x00ffffff-no-rj" }
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: state.messagesData.length + 1,
                message: action.newMessageText,
                likecounts: 0
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };

        default:
            return state;
    }
}

export const addMessageActionCreater = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText });

export { dialogsReducer };