import { $authHost, $host } from ".";


export const registration = async (email, password) => {
    const resonse = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    return resonse

}

export const login = async (email, password) => {
    const resonse = await $host.post('api/user/login', {email, password})
    return resonse

}

export const check = async () => {
    const response = await $host.post('api/auth/registration')
    return response

}