"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.post('/signin', 
// SchemaValidator([{ schema: AdminSignIn(), on: 'body' }]), 
middlewares_1.ValidateAdmin, controllers_1.AdminController.SignIn);
router.get('/queries', middlewares_1.ValidateAdmin, controllers_1.AdminController.GetAllQueries);
router.delete("/query/:id", middlewares_1.ValidateAdmin, 
//  SchemaValidator([{ schema: AdminDeleteQuery(), on: "params" }]), 
controllers_1.AdminController.DeleteQuery);
exports.default = router;
