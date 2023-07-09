"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateAdmin = void 0;
const http_handler_1 = require("./http-handler");
const constant_1 = require("../utils/constant");
const ValidateAdmin = (req, res, next) => {
    try {
        const admin = req.headers.isadmin;
        if (admin && admin == "true")
            return next();
        return (0, http_handler_1.HttpResponse)(res, { success: false, data: null, statusCode: constant_1.CONSTANTS.HTTP_STATUS.UNAUTHORIZED, message: "Not Authorized !" });
    }
    catch (error) {
        return (0, http_handler_1.HttpResponse)(res, { success: false, statusCode: constant_1.CONSTANTS.HTTP_STATUS.SERVER_ERROR, message: error });
    }
};
exports.ValidateAdmin = ValidateAdmin;
