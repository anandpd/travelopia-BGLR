"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = exports.notFoundHandler = exports.errorHandler = void 0;
const constant_1 = require("../utils/constant");
const errorHandler = (err, req, res, next) => {
    const errMsg = typeof err == 'object' ? (err.message ? err.message : "Something went wrong!") : (typeof err == 'string' ? err : "Something went wrong!");
    return res.status(constant_1.CONSTANTS.HTTP_STATUS.SERVER_ERROR).json({
        success: false,
        message: errMsg,
        data: null
    });
};
exports.errorHandler = errorHandler;
const notFoundHandler = (req, res, next) => {
    return res.status(constant_1.CONSTANTS.HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: `Route not found ${req.url}`,
        data: null
    });
};
exports.notFoundHandler = notFoundHandler;
const HttpResponse = (res, data) => {
    console.log("HttpHandler ()");
    return res.status(data.statusCode || 200).json({
        success: typeof data.success != 'undefined' ? data.success : true,
        message: data?.message || "Success",
        data: data?.data || null
    });
};
exports.HttpResponse = HttpResponse;
