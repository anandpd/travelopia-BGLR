import axios from 'axios';


export async function deleteQueryMutation(id: string): Promise<any> {
    try {
        const responseData = await axios({
            method: 'delete',
            headers: { 'isadmin': "true" },
            url: `https://travelopia-backend-node.onrender.com/v1/admin/query/${id}`,
        });
        return responseData;
    } catch (error: any) {
        return error;
    }
}