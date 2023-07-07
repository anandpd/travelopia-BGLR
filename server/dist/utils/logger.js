"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const customFormat = winston_1.format.printf(({ level, message, label, timestamp }) => {
    return `[${timestamp}], ${level}: ${typeof message == 'string' ? message : JSON.stringify(message)}`;
});
exports.logger = (0, winston_1.createLogger)({
    level: process.env.NODE_ENV == 'production' ? 'debug' : 'silly',
    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp({ format: "HH:mm:ss" }), customFormat),
    transports: [
        new winston_1.transports.Console()
    ],
});
