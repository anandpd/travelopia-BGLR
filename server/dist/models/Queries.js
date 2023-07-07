"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queries = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const constant_1 = require("../utils/constant");
const schema = new mongoose_1.default.Schema({
    countries: [
        {
            type: String,
            required: true
        }
    ],
    intrests: [
        {
            type: String,
            required: true
        }
    ],
    travelersCount: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        default: "Rs."
    }
});
exports.Queries = mongoose_1.default.model(constant_1.CONSTANTS.MODELS.QUERIES, schema);
