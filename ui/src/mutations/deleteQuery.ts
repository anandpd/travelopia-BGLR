import axios from 'axios';


export async function deleteQueryMutation(id: string): Promise<any> {
    try {
        const responseData = await axios({
            method: 'delete',
            headers: { 'isadmin': "true", "Content-Type": "application/json" },
            url: `http://3.24.124.171:4000/admin/query/${id}`,
        });
        return responseData;
    } catch (error: any) {
        return error;
    }
}