import React from "react";

//types:
export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type AppStateType = {
    dialogPage: {
        dialogs: Array<DialogsDataType>,
        messages: Array<MessagesDataType>
    }
    profilePage: {
        posts: Array<PostsDataType>
    }
}

//callBacks:
export const addPost = (message: string)=>{

  const newPost: PostsDataType =  {
      id: 4,
      message,
      likesCount: 0
  }
  PostsData.push(newPost);
    debugger
}

//BLL:
const PostsData: Array<PostsDataType> = [
    {id: 1, message: "Hi dude", likesCount: 12},
    {id: 2, message: "nice photos!", likesCount: 11},
]
const DialogsData: Array<DialogsDataType> = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Victor"},
]
const MessagesData: Array<MessagesDataType> = [
    {id: 1, message: "Hello"},
    {id: 2, message: "How are u?"},
]


const state: AppStateType = {
    dialogPage: {
        dialogs: DialogsData,
        messages: MessagesData
    },
    profilePage: {
        posts: PostsData
    }
}

export {
    state
}