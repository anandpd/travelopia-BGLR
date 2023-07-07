"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const admin_1 = __importDefault(require("./admin"));
const queries_1 = __importDefault(require("./queries"));
router.use('/query', queries_1.default);
router.use('/admin', admin_1.default);
exports.default = router;
