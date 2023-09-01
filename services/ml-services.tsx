import axios from "axios";

const ML_SERVICES_URL = "http://127.0.0.1:5000";

export const getTest = async () => {
    try {
        const res = await axios.get(`${ML_SERVICES_URL}/test`);
        return res.data;
    } catch (err) {
        console.error('Error fetching data: ', err);
        throw err;
    }
}

export const postGeneral = async (generalInfo: any) => {
    try {
        const res = await axios.post(`${ML_SERVICES_URL}/addGeneral`, 
        { generalInfo });
        return res.data;
    } catch (err) {
        console.error('Error fetching data: ', err);
        throw err;
    }
}
    
