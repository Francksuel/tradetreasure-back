import itemService from '@/services/item.service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getItens(req: Request, res: Response): Promise<void> {
  const { name } = req.query as Record<string, string>;
  try {
    const items = await itemService.getItens(name);

    res.send(items);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
