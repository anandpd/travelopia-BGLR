"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = require("./logger");
const connectDB = async (connectionURL) => {
    try {
        await mongoose_1.default.connect(connectionURL, {});
        logger_1.logger.info(`Database connected successfully !`);
    }
    catch (error) {
        logger_1.logger.error(`Error in connecting databse with connection url = ${connectionURL}`);
    }
};
exports.connectDB = connectDB;
