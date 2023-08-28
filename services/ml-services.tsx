import axios from "axios";

const ML_SERVICES_URL = process.env.ML_SERVICES_URL;

export const getTest = async () => {
    try {
        const res = await axios.get(`${ML_SERVICES_URL}/test`);
        return res.data;
    } catch (err) {
        console.error('Error fetching data: ', err);
        throw err;
    }
}

// export async function getTest() {
//     const res_test =
//         await fetch(`${ML_SERVICES_URL}/test`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })
//         .then(async (res) => {
//             const data = await res.json();
//             return data.data.res_test;
//         });
//         return res_test;
// }

// async function fetchTest() {
//     const res = await fetch(`${ML_SERVICES_URL}/test`);
//     // const data = await res.json();
//     return res;
// }
