"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const database_connection_1 = require("./utils/database.connection");
const logger_1 = require("./utils/logger");
const constant_1 = require("./utils/constant");
const morgan_body_1 = __importDefault(require("morgan-body"));
const PORT = process.env.PORT || 4000;
const routes_1 = __importDefault(require("./routes"));
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
(0, morgan_body_1.default)(app);
app.use(express_1.default.json());
// app.use(cors({ allowedHeaders: "*", origin: "*", methods: "*" }));
const allowCrossDomain = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Methods`, `*`);
    res.header(`Access-Control-Allow-Headers`, `*`);
    next();
};
app.use(allowCrossDomain);
app.get('/', async (req, res) => res.send("<p>Travelopia Server</p>"));
app.use("/v1", routes_1.default);
process.on('unhandledRejection', (e) => {
    logger_1.logger.error("unhandledRejection", e);
});
process.on('uncaughtException', (e) => {
    logger_1.logger.error("uncaughtException", e);
});
app.use(middlewares_1.errorHandler);
app.use(middlewares_1.notFoundHandler);
(0, database_connection_1.connectDB)(process.env.DATABASE || constant_1.CONSTANTS.DATABASE);
app.listen(PORT, () => logger_1.logger.info(`Server listening on port ${PORT}`));
