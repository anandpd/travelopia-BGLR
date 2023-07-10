import { NextFunction, Request, Response } from "express"
import { CONSTANTS } from "../utils/constant";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    const errMsg: string = typeof err == 'object' ? (err.message ? err.message : "Something went wrong!") : (typeof err == 'string' ? err : "Something went wrong!")
    return res.status(CONSTANTS.HTTP_STATUS.SERVER_ERROR).json({
        success: false,
        message: errMsg,
        data: null
    })
}

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    return res.status(CONSTANTS.HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: `Route not found ${req.url}`,
        data: null
    })
}

export const HttpResponse = (res: Response, data: HttpNS.IHandleResponse) => {
    console.log("HttpHandler ()")
    return res.status(data.statusCode || 200).json({
        success: typeof data.success != 'undefined' ? data.success : true,
        message: data?.message || "Success",
        data: data?.data || null
    });

}