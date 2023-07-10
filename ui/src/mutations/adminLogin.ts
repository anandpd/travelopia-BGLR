import axios from 'axios';

export async function adminLoginMutation(data: { username: string, password: string }): Promise<any> {
    try {
        const responseData = await axios({
            method: 'post',
            headers: { 'isadmin': "true", "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            url: 'https://travelopia-backend-node.vercel.app/v1/admin/signin',
            data: { ...data }
        });
        return responseData;
    } catch (error: any) {
        return error;
    }
}