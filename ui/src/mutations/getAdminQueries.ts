import axios from 'axios';


export async function getAdminQueriesMutation(): Promise<any> {
    try {
        const responseData = await axios({
            method: 'get',
            headers: { 'isadmin': "true" },
            url: 'http://localhost:4000/v1/admin/queries',
        });
        return responseData;
    } catch (error: any) {
        return error;
    }
}