import axios from 'axios';


export async function deleteQueryMutation(id: string): Promise<any> {
    try {
        const responseData = await axios({
            method: 'delete',
            headers: { 'isadmin': "true" },
            url: `http://localhost:4000/v1/admin/query/${id}`,
        });
        return responseData;
    } catch (error: any) {
        return error;
    }
}