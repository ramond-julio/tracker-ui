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

//Update
export const updateCategoryAPI = async({ name, type,id })=>{
    const response = await axios.put(`${BASE_URL}/categories/update/${id}`,
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

//Delete
export const deleteCategoryAPI = async(id)=>{
    const response = await axios.delete(`${BASE_URL}/categories/delete/${id}`,
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

//Get Category
export const getCategoryAPI = async(id)=>{
    const response = await axios.get(`${BASE_URL}/categories/get-category/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    //return promise
    return response.data;
    
}