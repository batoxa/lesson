import profileReducer, { addPostActionCreater, deletePostActionCreater } from "./profile-reducer";

const state = {
    postData: [
        { id: 1, message: "Hi, how are you?", likecounts: 5 },
        { id: 2, message: "Ok", likecounts: 3 },
        { id: 3, message: "Yoooo, nice!", likecounts: 7 }
    ],
};

test('length of post should be incremented', () => {
    const action = addPostActionCreater("Yoyo");

    const newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(4);

});

test('message of new post should be corrected', () => {
    const action = addPostActionCreater("Yoyo");
    const newState = profileReducer(state, action);
    expect(newState.postData[3].message).toBe("Yoyo");

});

test('after deleting length of message should be decremented', () => {
    const action = deletePostActionCreater(1);
    const newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(2);

});
