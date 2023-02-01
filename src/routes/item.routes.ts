import { getItens } from '@/controllers/itens.controller';

import { Router } from 'express';

const itensRouter = Router();

itensRouter.get('/', getItens);

export { itensRouter };
