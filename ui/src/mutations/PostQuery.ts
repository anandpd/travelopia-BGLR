import axios from 'axios';
import { IMutationData } from '../interfaces/form.select.interface';

export async function postQueryMutation(data: IMutationData) {
    try {
        const responseData = await axios({
            method: 'post',
            url: 'http://3.24.124.171:4000/v1/query',
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