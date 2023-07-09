"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const middlewares_1 = require("../middlewares");
const constant_1 = require("../utils/constant");
const service = __importStar(require("../services"));
const models_1 = require("../models");
exports.AdminController = {
    SignIn: async (req, res) => {
        try {
            const payload = req.body;
            return (0, middlewares_1.HttpResponse)(res, { success: true, data: { ...payload, isAdmin: true } });
        }
        catch (error) {
            return (0, middlewares_1.HttpResponse)(res, { success: false, statusCode: constant_1.CONSTANTS.HTTP_STATUS.SERVER_ERROR, message: error });
        }
    },
    GetAllQueries: async (req, res) => {
        try {
            const allQueries = await service.dbService.Find(models_1.Queries, {});
            return (0, middlewares_1.HttpResponse)(res, { data: allQueries });
        }
        catch (error) {
            return (0, middlewares_1.HttpResponse)(res, { success: false, statusCode: constant_1.CONSTANTS.HTTP_STATUS.SERVER_ERROR, message: error });
        }
    },
    DeleteQuery: async (req, res) => {
        try {
            const id = req.params.id;
            await service.dbService.RemoveByPK(models_1.Queries, id);
            return (0, middlewares_1.HttpResponse)(res, {});
        }
        catch (error) {
            return (0, middlewares_1.HttpResponse)(res, { success: false, statusCode: constant_1.CONSTANTS.HTTP_STATUS.SERVER_ERROR, message: error });
        }
    },
};
