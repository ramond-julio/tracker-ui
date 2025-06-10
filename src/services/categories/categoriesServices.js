import { getUserFromStorage } from "../../utils/getUserStorage";
import { BASE_URL } from "../../utils/url";
import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";

//Get Token
const token = getUserFromStorage();
//Add
export const addCategoryAPI = async({ name, type })=>{
    const response = await axiosInstance.post(
        `${BASE_URL}/categories/create`,
        {name,type}
    );
    //return promise
    return response.data;
}

//Update
export const updateCategoryAPI = async({ name, type,id })=>{
    const response = await axiosInstance.put(
        `${BASE_URL}/categories/update/${id}`,
        {name,type}
    );
    //return promise
    return response.data;
}

//Delete
export const deleteCategoryAPI = async(id)=>{
    const response = await axiosInstance.delete(
        `${BASE_URL}/categories/delete/${id}`
    );
    //return promise
    return response.data;
}

//List
export const listsCategoryAPI = async()=>{
    const response = await axiosInstance.get(
        `${BASE_URL}/categories/lists`);
    //return promise
    return response.data;
}

//Get Category
export const getCategoryAPI = async(id)=>{
    const response = await axiosInstance.get(
        `${BASE_URL}/categories/get-category/${id}`
    );
    //return promise
    return response.data;
    
}