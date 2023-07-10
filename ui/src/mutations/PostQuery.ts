import axios from 'axios';
import { IMutationData } from '../interfaces/form.select.interface';

export async function postQueryMutation(data: IMutationData) {
    try {
        const responseData = await axios({
            method: 'post',
            url: 'https://travelopia-backend-node.onrender.com/v1/query',
            headers: { "Content-Type": "application/json"},
            data: {
                ...data
            }
        });
        return responseData;
    } catch (error:any) {
        return error;
    }
}