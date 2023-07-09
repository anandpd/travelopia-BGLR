

export interface INwResponse {
    success: boolean,
    message: string,
    data: Array<any> | object | null
}

export interface IAxiosSuccessRes {
    data: INwResponse

}
export interface IAxiosResponse {
    response?: {
        data: INwResponse
    }

}