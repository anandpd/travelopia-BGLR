"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaValidator = void 0;
const constant_1 = require("../utils/constant");
const http_handler_1 = require("./http-handler");
const logger_1 = require("../utils/logger");
const SchemaValidator = (schemas) => {
    return async function (req, res, next) {
        schemas.map(s => {
            const { schema, on } = s;
            const { error, value } = schema.validate(req[on], { errors: { wrap: { label: '' } } });
            if (!error)
                next();
            logger_1.logger.error("Error while validating => ", error);
            return (0, http_handler_1.HttpResponse)(res, {
                statusCode: constant_1.CONSTANTS.HTTP_STATUS.BAD_REQUEST,
                message: error.message,
                success: false
            });
        });
    };
};
exports.SchemaValidator = SchemaValidator;
