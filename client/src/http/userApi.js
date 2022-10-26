import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";
import { Context } from "..";
import { useContext } from "react";



export const registration = async (email, password, role) => {
    const {data} = await $host.post('api/user/registration', {email, password, role})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)

}

export const login = async (email, password, user) => {
    const {data} = await $host.post('api/user/login', {email, password})
    const role = data['role']
    user.setRole(role)
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)

}



export const check = async (user) => {
   

    const {data} = await $authHost.get('api/user/auth')
    const role = data['role']
    console.log('роль установлена ' +role)
    // SetRole(role)
    user.setRole(role)
    

    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)

}

