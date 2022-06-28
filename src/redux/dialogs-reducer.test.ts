import {addMessage, DialogsInitialStateType, dialogsReducer} from "./dialogs-reducer";
import {addPost} from "./profile-reducer";

const state: DialogsInitialStateType = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Sasha"},
    ],
    messages: [
        {id: 1, message: "hello", time: "test 4/1/2022, 10:38:18 PM"},
        {id: 2, message: "How are you?", time: "test 4/1/2022, 10:39:22 PM"},

    ],
    newMessageText: ""
}

it('new message should be added', ()=> {
    //1.test data:
    const action = addMessage("testMessage3");
    //2.action:
    const newState = dialogsReducer(state,action);
    //3.expectation:
    expect(newState.messages.length).toBe(3);
});