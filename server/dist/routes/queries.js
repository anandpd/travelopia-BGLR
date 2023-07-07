"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const validations_1 = require("../validations");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.post('/', (0, middlewares_1.SchemaValidator)([{ schema: (0, validations_1.PostQuery)(), on: 'body' }]), controllers_1.QueryController.PostQuery);
exports.default = router;
