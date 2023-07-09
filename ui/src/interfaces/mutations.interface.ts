export interface IAxiosRes {
    success: boolean | null,
    message: string,
    data: Array<any> | object | null
}


export interface IModalProps {
    show: boolean,
    handleClose: (any),
    handleShow: (any),
    stateProps: {
        places: Array<string>,
        setPlaces: (data: Array<string>) => any,
        budget: string,
        setBudget: (data:string) => any,
        count: string,
        setCount: (count: string) => any,
        intrests: Array<string>,
        setIntrests: (intrests: Array<string>) => any,
    }
}