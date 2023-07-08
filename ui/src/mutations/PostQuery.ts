import axios from 'axios';

export async function postQuery(data: any) {
    try {
        await axios.post("localhost:4000/v1/query")
    } catch (error) {
        return error;
    }
}