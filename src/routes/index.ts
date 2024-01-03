import express from 'express';
import customersRouter from './customers';

const router = express.Router();

router.use('/customers', customersRouter);

export default router;
