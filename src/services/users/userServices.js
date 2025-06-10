import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserStorage";
import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";

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
    const response = await axios.post(`${BASE_URL}/users/register`,
        {
            email,
            password,
            username
        }
    );
    //return promise
    return response.data;
}

//Profile
export const profileAPI = async()=>{
    const response = await axiosInstance.get(`${BASE_URL}/users/profile`);
    //return promise
    return response.data;
}

//Change Password
export const changePasswordAPI = async(newPassword)=>{
    const response = await axiosInstance.put(
        `${BASE_URL}/users/change-password`,
        {newPassword}
    );
    //return promise
    return response.data;
}


//Update Profile
export const updateProfileAPI = async({ email, username })=>{
    const response = await axiosInstance.put(
        `${BASE_URL}/users/update-profile`,
        { email,username }
    );
    //return promise
    return response.data;
}