import { BASE_URL } from "../../utils/url";
import axios from "axios";

//Login
export const loginAPI = async({ email, password})=>{
    const response = await axios.post(`${BASE_URL}/users/login`,{
        email,
        password
    });
    //return promise
    return response.data;
}

//Register
export const registerAPI = async({ email, password,username })=>{
    const response = await axios.post(`${BASE_URL}/users/register`,{
        email,
        password,
        username
    });
    //return promise
    return response.data;
}