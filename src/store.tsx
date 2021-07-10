import React from "react";

export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

export const PostsData: Array<PostsDataType> = [
    {id: 1, message: "Hi dude", likesCount: 12},
    {id: 1, message: "nice photos!", likesCount: 11},
]

