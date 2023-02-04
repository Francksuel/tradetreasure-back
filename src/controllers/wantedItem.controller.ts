import { AuthenticatedRequest } from '@/middlewares/authentication-middleware';
import wantedItemService from '@/services/wantedItem.service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function postWantedItem(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { pokemonId } = req.body;
  try {
    const wantedItem = await wantedItemService.createWantedItem(userId, Number(pokemonId));

    res.send(wantedItem);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getWantedItens(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const wantedItem = await wantedItemService.listWantedItens(userId);

    res.send(wantedItem);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
