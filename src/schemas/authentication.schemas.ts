import { CreateUserParams, SignInParams } from "@/services/authentication.service";
import Joi from "joi";

export const signInSchema = Joi.object<SignInParams>({
  nickname: Joi.string().required(),  
  password: Joi.string().min(4).required(),  
});

export const signUpSchema = Joi.object<CreateUserParams>({
  nickname: Joi.string().required(),
  code: Joi.string().min(4).required(),
  password: Joi.string().min(4).required(),  
})
