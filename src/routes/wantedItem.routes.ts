import { deleteWantedItem, getWantedItens, postWantedItem } from '@/controllers/wantedItem.controller';
import { authenticateToken } from '@/middlewares/authentication-middleware';
import { validateBody } from '@/middlewares/validation.middleware';
import { itemRequestSchema } from '@/schemas/itemRequest.schema';
import { Router } from 'express';

const wantedItemRouter = Router();

wantedItemRouter.post('/', authenticateToken, validateBody(itemRequestSchema), postWantedItem);
wantedItemRouter.get('/', authenticateToken, getWantedItens);
wantedItemRouter.delete('/:itemId', authenticateToken, deleteWantedItem);

export { wantedItemRouter };
