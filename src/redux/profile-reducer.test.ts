import {addLike, addPost, deletePost, ProfileInitialStateType, profileReducer} from "./profile-reducer";

const state: ProfileInitialStateType = {
    posts: [
        {
            id: 222,
            message: "testPost",
            likesCount: 1,
            isLiked: false,
        },
        {
            id: 223,
            message: "testPost2",
            likesCount: 1,
            isLiked: false,
        }
    ],
    newPostText: "",
    profile: null,
    status: "",
}

it('new post should be added', ()=> {
    //1.test data:
    const action = addPost("testPost3");
    //2.action:
    const newState = profileReducer(state,action);
    //3.expectation:
    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', ()=> {
    //1.test data:
    const action = addPost("testPost3");
    //2.action:
    const newState = profileReducer(state,action);
    //3.expectation:
    expect(newState.posts[0].message).toBe("testPost3");
});

it('length of posts should decremented after deleting', ()=> {
    //1.test data:
    const action = deletePost(222);
    //2.action:
    const newState = profileReducer(state,action);
    //3.expectation:
    expect(newState.posts.length).toBe(1);
});

it('length of posts should not decremented after deleting if id is incorrect', ()=> {
    //1.test data:
    const action = deletePost(2226);
    //2.action:
    const newState = profileReducer(state,action);
    //3.expectation:
    expect(newState.posts.length).toBe(2);
});

it('like of the post should be correct',()=>{
    //1.test data:
    const action = addLike(223,true);
    //2.action:
    const newState = profileReducer(state,action);
    //3.expectation:
    expect(newState.posts[1].id).toBe(223);
    expect(newState.posts[1].isLiked).toBe(true);
    expect(newState.posts[1].likesCount).toBe(2);
});