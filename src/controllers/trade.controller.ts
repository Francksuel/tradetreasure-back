import { AuthenticatedRequest } from '@/middlewares/authentication-middleware';
import tradeService from '@/services/trade.service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getTrades(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {
    const availableTrades = await tradeService.getTrades(userId);

    res.send(availableTrades);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
