import { Router } from 'express';
import { AdminController } from '../controllers';
import { SchemaValidator, ValidateAdmin } from '../middlewares';
import {  AdminSignIn } from '../validations';
const router = Router();

router.post('/signin', SchemaValidator([{ schema: AdminSignIn(), on: 'body' }]), ValidateAdmin, AdminController.SignIn);
router.get('/queries', ValidateAdmin, AdminController.GetAllQueries);

export default router;