import { getItens } from '@/controllers/itens.controller';

import { Router } from 'express';

const itemRouter = Router();

itemRouter.get('/', getItens);

export { itemRouter };
