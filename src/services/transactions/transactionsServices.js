import { getUserFromStorage } from "../../utils/getUserStorage";
import { BASE_URL } from "../../utils/url";
import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";

//Get Token
const token = getUserFromStorage();
//Add
export const addTransactionAPI = async({ type,amount,date,description,category })=>{
    const response = await axiosInstance.post(
        `${BASE_URL}/transactions/create`,
        {type,amount,date,description,category}
    );
    //return promise
    return response.data;
}

//Update
export const updateTransactionAPI = async({ type,amount,date,description,category,id })=>{
    const response = await axiosInstance.put(
        `${BASE_URL}/transactions/update/${id}`,
        {type,amount,date,description,category}
    );
    //return promise
    return response.data;
}

//Delete
export const deleteTransactionsAPI = async(id)=>{
    const response = await axiosInstance.delete(`${BASE_URL}/transactions/delete/${id}`
    );
    //return promise
    return response.data;
}

//List
export const listsTransactionAPI = async({category, type, startDate, endDate})=>{
    const response = await axiosInstance.get(
        `${BASE_URL}/transactions/lists`, 
        {params: {category, type, startDate, endDate}}
    );
    //return promise
    return response.data;
}

//Get Category
export const getTransactionAPI = async(id)=>{
    const response = await axiosInstance.get(
        `${BASE_URL}/transactions/get-transaction/${id}`
    );
    //return promise
    return response.data;
}