import { AuthenticatedRequest } from '@/middlewares/authentication-middleware';
import availableItemService from '@/services/availableItem.service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function postAvailableItem(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { pokemonId } = req.body;
  try {
    const availableItem = await availableItemService.createAvailableItem(userId, Number(pokemonId));

    res.send(availableItem);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getAvailableItens(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const availableItem = await availableItemService.listAvailableItens(userId);

    res.send(availableItem);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function deleteAvailableItem(req: AuthenticatedRequest, res: Response) {  
  const {itemId} = req.params as Record<string, string>;

  try {
    await availableItemService.deleteAvailableItem(Number(itemId));

    res.send('Item deleted');
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
