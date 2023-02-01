import authenticationService, { SignInParams } from '@/services/authentication.service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function signUpPost(req: Request, res: Response) {
  const { nickname, password, code } = req.body;

  try {
    const user = await authenticationService.createUser({ nickname, password, code });
    return res.status(httpStatus.CREATED).send({
      id: user.id,
      nickname: user.nickname,
      code: user.code,
    });
  } catch (error) {
    if (error.name === 'DuplicatedNicknameError' || error.name === 'DuplicatedCodeError') {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function singInPost(req: Request, res: Response) {
  const { nickname, password } = req.body as SignInParams;

  try {
    const result = await authenticationService.signIn({ nickname, password });

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}
