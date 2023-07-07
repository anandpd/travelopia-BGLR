import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "./http-handler";
import { CONSTANTS } from "../utils/constant";

export const ValidateAdmin = (req: Request, res: Response, next: NextFunction) => {
    try {
        const admin = <string>req.headers.isadmin;
        if (admin && admin == "true") return next();
        return HttpResponse(res, { success: false, data: null, statusCode: CONSTANTS.HTTP_STATUS.UNAUTHORIZED, message: "Not Authorized !" })

    } catch (error: any) {
        return HttpResponse(res, { success: false, statusCode: CONSTANTS.HTTP_STATUS.SERVER_ERROR, message: error });
    }
}