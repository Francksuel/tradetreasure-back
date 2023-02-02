import { signUpPost, singInPost } from '@/controllers/authentication.controller';
import { validateBody } from '@/middlewares/validation.middleware';
import { signInSchema, signUpSchema } from '@/schemas/authentication.schemas';

import { Router } from 'express';

const authenticationRouter = Router();

authenticationRouter.post('/sign-up', validateBody(signUpSchema), signUpPost);
authenticationRouter.post('/sign-in', validateBody(signInSchema), singInPost);

export { authenticationRouter };
