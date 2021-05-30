import * as axios from "axios";
import {SAMURAIJS_API_KEY} from "../Utils/API_keys";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": SAMURAIJS_API_KEY
    }
})

export const getUsers =(pageNumber,pageSize)=> {
   return  axiosInstance.get(`/users?page=${pageNumber}&count=${pageSize}`)
       .then(response=>{
           console.log('getUsers');
           return response.data
       });
}

export const DoFollowUser =(id)=> {
    return  axiosInstance.post(`/follow/${id}`)
        .then(response=>{
            console.log('postUsers');
            return response.data
        });
}
export const DoUnfollowUser =(id)=> {
    return  axiosInstance.delete(`/follow/${id}`)
        .then(response=>{
            console.log('deleteUsers');
            return response.data
        });
}
