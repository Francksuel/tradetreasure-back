import { deleteAvailableItem, getAvailableItens, postAvailableItem } from '@/controllers/availableItem.controller';
import { authenticateToken } from '@/middlewares/authentication-middleware';
import { validateBody } from '@/middlewares/validation.middleware';
import { itemRequestSchema } from '@/schemas/itemRequest.schema';
import { Router } from 'express';

const availableItemRouter = Router();

availableItemRouter.post('/', authenticateToken, validateBody(itemRequestSchema), postAvailableItem);
availableItemRouter.get('/', authenticateToken, getAvailableItens);
availableItemRouter.delete('/:itemId', authenticateToken, deleteAvailableItem);

export { availableItemRouter };
