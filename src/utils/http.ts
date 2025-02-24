import axios from 'axios'

export const http = axios.create({
    withCredentials: true
})

http.interceptors.request.use((req)=>{
    return req;
})