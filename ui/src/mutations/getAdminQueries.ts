import axios from 'axios';


export async function getAdminQueriesMutation(): Promise<any> {
    try {
        const responseData = await axios({
            method: 'get',
            headers: { 'isadmin': "true",  "Content-Type": "application/json" },
            url: 'https://travelopia-backend-node.onrender.com/v1/admin/queries',
        });
        return responseData;
    } catch (error: any) {
        return error;
    }
}