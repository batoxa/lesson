import * as axios from 'axios';

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: { "API-KEY": "1b1b17d4-223e-415d-9789-145d350651ec" }
});

export const userAPI = {
   getUsers(activePage, pageSize) {
      return instance.get(`users?page=${activePage}&count=${pageSize}`)
         .then(response => {
            return response.data;
         })
   },

   setFollow(userId) {
      return instance.post(`follow/${userId}`)
         .then(response => {
            return response.data;
         })
   },

   setUnfollow(userId) {
      return instance.delete(`follow/${userId}`)
         .then(response => {
            return response.data;
         })
   },
}

export const authAPI = {
   authMe() {
      return instance.get(`auth/me`)
         .then(response => {
            return response.data;
         })
   }
}

export const profileAPI = {
   userProfile(userId) {
      return instance.get(`profile/${userId ? userId : 16856}`)
         .then(response => {
            return response.data;
         })
   }
}






