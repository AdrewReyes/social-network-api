import { Router } from 'express';
import { thoughtRouter } from './api/thoughtRoutes';
import { userRouter } from './api/userRoutes';

const router = Router();

// Use the thought routes
router.use('/thoughts', thoughtRouter);

// Use the user routes
router.use('/users', userRouter);

export default router;