import { getTrades } from '@/controllers/trade.controller';
import { authenticateToken } from '@/middlewares/authentication-middleware';

import { Router } from 'express';

const tradeRouter = Router();

tradeRouter.get('/', authenticateToken, getTrades);

export { tradeRouter };
