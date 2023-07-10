import joi, { Schema } from 'joi';
import { CONSTANTS } from '../utils/constant';
import { HttpResponse } from './http-handler';
import { logger } from '../utils/logger';
import { NextFunction, Request, Response } from 'express';


export const SchemaValidator = (schemas: Array<IJoi.Schema>) => {
    return async function (req: Request, res: Response, next: NextFunction) {
        schemas.map(s => {
            const { schema, on } = s;
            const { error, value } = schema.validate(req[on], { errors: { wrap: { label: '' } } });
            if (!error) next();
            logger.error("Error while validating => ", error);
            console.log(" ================================================ ");
            return HttpResponse(res, {
                statusCode: CONSTANTS.HTTP_STATUS.BAD_REQUEST,
                message: error?.message ? error.message: JSON.stringify(error),
                success: false
            });
        })

    }
}
