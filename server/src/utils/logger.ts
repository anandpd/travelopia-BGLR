import { createLogger, format, transports } from 'winston';

const customFormat = format.printf(({ level, message, label, timestamp }) => {
    return `[${timestamp}], ${level}: ${typeof message == 'string' ? message : JSON.stringify(message)}`;
});

export const logger = createLogger({
    level: process.env.NODE_ENV == 'production' ? 'debug' : 'silly',
    format: format.combine(format.colorize(), format.timestamp({ format: "HH:mm:ss" }), customFormat),
    transports: [
        new transports.Console()
    ],
});
