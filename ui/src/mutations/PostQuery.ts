import axios, { Axios, AxiosError } from 'axios';

export async function postQueryMutation(data: any) {
    try {
        const responseData = await axios({
            method: 'post',
            url: 'http://localhost:4000/v1/query',
            data: {
                ...data
            }
        });
        return responseData;
    } catch (error:any) {
        return error;
    }
}