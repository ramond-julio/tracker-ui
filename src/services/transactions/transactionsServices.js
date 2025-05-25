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
// export const updateCategoryAPI = async({ name, type,id })=>{
//     const response = await axios.put(`${BASE_URL}/categories/update/${id}`,
//         {name,type},
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }
//     );
//     //return promise
//     return response.data;
// }

//Delete
// export const deleteCategoryAPI = async(id)=>{
//     const response = await axios.delete(`${BASE_URL}/categories/delete/${id}`,
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }
//     );
//     //return promise
//     return response.data;
// }

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