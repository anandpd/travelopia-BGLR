"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDeleteQuery = exports.AdminSignIn = void 0;
const joi_1 = __importDefault(require("joi"));
const AdminSignIn = () => {
    const schema = joi_1.default.object({
        username: joi_1.default.string().required().valid("admin").error(new Error("Invalid Username")),
        password: joi_1.default.string().required().valid("rootAdmin007").error(new Error("Invalid Password"))
    });
    return schema;
};
exports.AdminSignIn = AdminSignIn;
const AdminDeleteQuery = () => {
    const schema = joi_1.default.object({
        id: joi_1.default.string().required()
    });
    return schema;
};
exports.AdminDeleteQuery = AdminDeleteQuery;
