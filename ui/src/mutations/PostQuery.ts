import axios from 'axios';
import { IMutationData } from '../interfaces/form.select.interface';

export async function postQueryMutation(data: IMutationData) {
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