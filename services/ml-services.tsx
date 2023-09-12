import axios from "axios";


import { API_BASE_URL } from "../config";

export const getTest = async () => {
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

export const getPrediction = async (houseData: any) => {
    console.log(houseData);
    try {
        const res = await axios.post(`${API_BASE_URL}/ml_model`, houseData);
        return res.data;
    } catch (err) {
        console.error('Error fetching data: ', err);
        throw err;
    }
}
