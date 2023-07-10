import axios from 'axios';


export async function adminLoginMutation(data: { username: string, password: string }): Promise<any> {
    try {
        const responseData = await axios({
            method: 'post',
            headers: { 'isadmin': "true" },
            url: 'https://travelopia-backend-node.onrender.com/v1/admin/signin',
            data: { ...data }
        });
        return responseData;
    } catch (error: any) {
        return error;
    }
}