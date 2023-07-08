import axios from 'axios';

export async function postQuery(data: any) {
    try {
        const responseData = await axios({
            method: 'post',
            url: 'http://localhost:4000/v1/query',
            data: {
                ...data
            }
        });
        console.log("Response = ", responseData.data);
        return responseData.data;
    } catch (error) {
        console.log("Something went wrong !!", error);
        return error;
    }
}