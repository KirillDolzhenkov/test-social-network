import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "2f53ebc7-6e0c-44af-b6eb-a755cbe3639f"
    }
});

export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
}

export const follow = (userId: number)=>{
    return instance.post(`follow/${userId}`)
        .then(response => {
            return response.data;
        });
}

export const unFollow = (userId: number)=>{
    return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data;
        });
}