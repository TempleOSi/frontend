import axios from "axios";

import { API_BASE_URL } from "../config";

export const getTest = async () => {
    console.log('API_BASE_URL', API_BASE_URL)
    try {
        const res = await axios.get(`${API_BASE_URL}/test`);
        return res.data;
    } catch (err) {
        console.error('Error fetching data: ', err);
        throw err;
    }
}

export const postGeneral = async (generalInfo: any) => {
    try {
        const res = await axios.post(`${API_BASE_URL}/addGeneral`, 
        { generalInfo });
        return res.data;
    } catch (err) {
        console.error('Error fetching data: ', err);
        throw err;
    }
}
    
