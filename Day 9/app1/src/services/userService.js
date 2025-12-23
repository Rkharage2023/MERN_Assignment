import axios from 'axios'
import config from './config'

export async function loginUser(email,password){
    const url = config.URL +"/users/signin"
    const body = {email,password}

    const res = await axios.post(url,body)
    return res.data

}

export async function registerUser(name,email,password,mobile){
    const url = config.URL +"/users/signup"
    const body = {name , email, password, mobile}
    const res = await axios.post(url,body)
    return res.data
}