import { Router } from 'express';
import { SchemaValidator } from '../middlewares';
import { PostQuery } from '../validations';
import { QueryController } from '../controllers';
const router = Router();

router.post('/', SchemaValidator([{ schema: PostQuery(), on: 'body' }]), QueryController.PostQuery);

export default router;
