import axios from 'axios';

export async function adminLoginMutation(data: { username: string, password: string }): Promise<any> {
    try {
        const responseData = await axios({
            method: 'post',
            headers: { 'isadmin': "true" },
            url: 'http://3.24.124.171:4000/v1/admin/signin',
            data: { ...data }
        });
        return responseData;
    } catch (error: any) {
        return error;
    }
}