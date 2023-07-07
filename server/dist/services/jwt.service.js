"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JWTService {
    constructor(secret) {
        this.secret = secret;
    }
    getToken(payload) {
        const token = jsonwebtoken_1.default.sign(payload, this.secret, { expiresIn: '30m' });
        return token;
    }
    verifyToken(token) {
        try {
            const validPayload = jsonwebtoken_1.default.verify(token, this.secret);
            return validPayload;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.jwtService = new JWTService('travelopia-secret-token');
