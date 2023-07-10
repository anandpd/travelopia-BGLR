import { Router } from 'express';
import { AdminController } from '../controllers';
import { SchemaValidator, ValidateAdmin } from '../middlewares';
import { AdminSignIn } from '../validations';
import { AdminDeleteQuery } from '../validations/admin.validation';
const router = Router();

router.post('/signin', SchemaValidator([{ schema: AdminSignIn(), on: 'body' }]), ValidateAdmin, AdminController.SignIn);

router.get('/queries', ValidateAdmin, AdminController.GetAllQueries);
router.delete("/query/:id", ValidateAdmin, SchemaValidator([{ schema: AdminDeleteQuery(), on: "params" }]), AdminController.DeleteQuery);

export default router;