import express from 'express';
import { addOrderItems } from '../controllers/orderControllers';
import { protect } from '../middleware/authMiddleWare';

const router = express.Router();

router.route('/').post(protect, addOrderItems);

export default router;
