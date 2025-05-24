import { getUserFromStorage } from "../../utils/getUserStorage";
import { BASE_URL } from "../../utils/url";
import axios from "axios";

//Get Token
const token = getUserFromStorage();
//Add
export const addCategoryAPI = async({ name, type })=>{
    const response = await axios.post(`${BASE_URL}/categories/create`,
        {name,type},
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    //return promise
    return response.data;
}

//List
export const listsCategoryAPI = async()=>{
    const response = await axios.get(`${BASE_URL}/categories/lists`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    //return promise
    return response.data;
}