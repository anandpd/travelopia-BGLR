import { Request, Response } from "express";
import { jwtService } from "../services";
import { HttpResponse } from "../middlewares";
import { CONSTANTS } from "../utils/constant";
import * as service from '../services';
import { Queries } from "../models";
import { IQueryInstance } from "../models/Queries";

export const AdminController = {
    SignIn: async (req: Request, res: Response): Promise<any> => {
        try {
            const payload: AdminNS.IAdminSignIn = req.body;
            return HttpResponse(res, { success: true, data: { ...payload, isAdmin: true } });
        } catch (error: any) {
            return HttpResponse(res, { success: false, statusCode: CONSTANTS.HTTP_STATUS.SERVER_ERROR, message: error });
        }
    },

    GetAllQueries: async (req: Request, res: Response): Promise<any> => {
        try {
            const allQueries: Array<IQueryInstance> = await service.dbService.Find(Queries, {});
            return HttpResponse(res, { data: allQueries });
        } catch (error: any) {
            return HttpResponse(res, { success: false, statusCode: CONSTANTS.HTTP_STATUS.SERVER_ERROR, message: error });
        }
    },
    DeleteQuery: async (req: Request, res: Response): Promise<any> => {
        try {
            const id: string = req.params.id;
            await service.dbService.RemoveByPK(Queries, id);
            return HttpResponse(res, {});
        } catch (error: any) {
            return HttpResponse(res, { success: false, statusCode: CONSTANTS.HTTP_STATUS.SERVER_ERROR, message: error });
        }
    },
}