import { Router } from 'express';
const router = Router();
import AdminRoutes from './admin';
import QueryRoutes from './queries';

router.use('/query', QueryRoutes);
router.use('/admin', AdminRoutes);


export default router;
