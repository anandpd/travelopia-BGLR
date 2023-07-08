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
exports.QueryController = void 0;
const constant_1 = require("../utils/constant");
const Queries_1 = require("../models/Queries");
const middlewares_1 = require("../middlewares");
const services = __importStar(require("../services"));
exports.QueryController = {
    PostQuery: async (req, res) => {
        try {
            const payload = req.body;
            const newQuery = {
                countries: payload.countries,
                intrests: payload.intrests,
                travelersCount: payload.travelersCount,
                budget: payload.budget,
            };
            if (payload.currency)
                newQuery.currency = payload.currency;
            const dbResponse = await services.dbService.Create(Queries_1.Queries, newQuery);
            return (0, middlewares_1.HttpResponse)(res, { message: "Query Crated Successfully !", data: dbResponse });
        }
        catch (error) {
            return (0, middlewares_1.HttpResponse)(res, { statusCode: constant_1.CONSTANTS.HTTP_STATUS.SERVER_ERROR, data: null, message: error });
        }
    }
};
