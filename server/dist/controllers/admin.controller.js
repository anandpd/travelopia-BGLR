"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const middlewares_1 = require("../middlewares");
const constant_1 = require("../utils/constant");
exports.AdminController = {
    SignIn: async (req, res) => {
        try {
            return (0, middlewares_1.HttpResponse)(res, { success: true, data: req.body });
        }
        catch (error) {
            return (0, middlewares_1.HttpResponse)(res, { success: false, statusCode: constant_1.CONSTANTS.HTTP_STATUS.SERVER_ERROR, message: error.message });
        }
        const payload = req.body;
    }
};
