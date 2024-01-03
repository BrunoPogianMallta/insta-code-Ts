import express from 'express';
import { create } from '../guards/customers.guard';

const router = express.Router();

router.post('/', create);

export default router;
