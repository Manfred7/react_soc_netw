import * as axios from "axios";
import {SAMURAIJS_API_KEY} from "../Utils/API_keys";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": SAMURAIJS_API_KEY
    }
})

export const ProfileAPI ={

    getProfileInfo(profileId){
        console.log('getProfileInfo.profileId ', profileId)
        return axiosInstance.get(`/profile/${profileId}`)
            .then(response => {
                console.log('getProfileInfo',response.data)
                return response.data
            })
    }
}


export const AuthAPI ={
    getAuthorUserData (){

        return axiosInstance.get(`/auth/me`)
            .then(response => {
                return response.data;
            })

    }
}

export const UsersAPI = {
    getUsers(pageNumber, pageSize) {
        return axiosInstance.get(`/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                console.log('getUsers');
                return response.data
            });
    },

    DoFollowUser(id) {
        return axiosInstance.post(`/follow/${id}`)
            .then(response => {
                console.log('postUsers');
                return response.data
            })
    },

    DoUnfollowUser(id) {
        return axiosInstance.delete(`/follow/${id}`)
            .then(response => {
                console.log('deleteUsers');
                return response.data
            });
    }
}



