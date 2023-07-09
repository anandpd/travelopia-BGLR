import axios from 'axios';


export async function adminLoginMutation(data: { username: string, password: string }): Promise<any> {
    try {
        const responseData = await axios({
            method: 'post',
            headers: { 'isadmin': "true" },
            url: 'http://localhost:4000/v1/admin/signin',
            data: { ...data }
        });
        console.log("Success from axios = ", responseData.data);
        return responseData;
    } catch (error: any) {
        console.log("error from axios = ", error.message);
        return error;
    }
}