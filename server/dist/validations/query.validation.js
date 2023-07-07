"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostQuery = void 0;
const joi_1 = __importDefault(require("joi"));
const PostQuery = () => {
    const bodySchema = joi_1.default.object({
        countries: joi_1.default.array().items(joi_1.default.string()),
        intrests: joi_1.default.array().items(joi_1.default.string()),
        travelersCount: joi_1.default.string().regex(/[0-9]+/).required().error(new Error("Invalid count, must be of type [0-9] or [0-9]+")),
        budget: joi_1.default.string().required(),
        currency: joi_1.default.string().optional().allow('')
    });
    return bodySchema;
};
exports.PostQuery = PostQuery;
