
import { CONSTANTS } from '../utils/constant';
import { IQueries, Queries } from '../models/Queries';
import { HttpResponse } from '../middlewares';
import { Request, Response } from 'express';
import * as services from '../services';
import { QueryType } from '../interfaces/query';


export const QueryController = {
    PostQuery: async (req: Request, res: Response): Promise<any> => {
        try {
            const payload: IQueries = req.body;
            const newQuery: QueryType = {
                countries: payload.countries,
                intrests: payload.intrests,
                travelersCount: payload.travelersCount,
                budget: payload.budget,
                name: payload.name,
                email: payload.email,
                phn: payload.phn
            };
            if (payload.currency) newQuery.currency = payload.currency;
            const dbResponse = await services.dbService.Create(Queries, newQuery);
            console.log("Query created with id = ", dbResponse._id);
            return HttpResponse(res, { message: "Query Crated Successfully !", data: dbResponse });
        } catch (error: any) {
            return HttpResponse(res, { statusCode: CONSTANTS.HTTP_STATUS.SERVER_ERROR, data: null, message: error });
        }
    }
}