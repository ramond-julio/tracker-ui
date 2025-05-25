import { getUserFromStorage } from "../../utils/getUserStorage";
import { BASE_URL } from "../../utils/url";
import axios from "axios";

//Get Token
const token = getUserFromStorage();
//Add
export const addTransactionAPI = async({ type,amount,date,description,category })=>{
    const response = await axios.post(`${BASE_URL}/transactions/create`,
        {type,amount,date,description,category},
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
export const updateTransactionAPI = async({ type,amount,date,description,category,id })=>{
    const response = await axios.put(`${BASE_URL}/transactions/update/${id}`,
        {type,amount,date,description,category},
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
export const deleteTransactionsAPI = async(id)=>{
    const response = await axios.delete(`${BASE_URL}/transactions/delete/${id}`,
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
export const listsTransactionAPI = async({category, type, startDate, endDate})=>{
    const response = await axios.get(`${BASE_URL}/transactions/lists`, {
        params: {category, type, startDate, endDate},
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    //return promise
    return response.data;
}

//Get Category
export const getTransactionAPI = async(id)=>{
    const response = await axios.get(`${BASE_URL}/transactions/get-transaction/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    //return promise
    return response.data;
}