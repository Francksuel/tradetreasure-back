import { signUpPost, singInPost } from "@/controllers/authentication.controller";

import { Router } from "express";

const authenticationRouter = Router();

authenticationRouter.post("/sign-up", signUpPost);
authenticationRouter.post("/sign-in", singInPost);

export { authenticationRouter };
