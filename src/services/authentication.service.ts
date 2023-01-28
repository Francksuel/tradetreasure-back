import { duplicatedCodeError, duplicatedNicknameError } from '@/errors';
import { invalidCredentialsError } from '@/errors/invalidCredentialsError';
import userRepository from '@/repositories/user.repository';
import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export async function createUser({ nickname, code, password }: CreateUserParams): Promise<User> {
  await validateUniqueNicknameOrFail(nickname);
  await validateUniqueCodeOrFail(code);
  const hashedPassword = await bcrypt.hash(password, 10);
  return userRepository.create({
    nickname,
    code,
    password: hashedPassword,
  });
}

async function validateUniqueNicknameOrFail(nickname: string) {
  const sameNickname = await userRepository.findByNickname(nickname);
  if (sameNickname) {
    throw duplicatedNicknameError();
  }
}

async function validateUniqueCodeOrFail(code: string) {
  const sameCode = await userRepository.findByCode(code);
  if (sameCode) {
    throw duplicatedCodeError();
  }
}

export type CreateUserParams = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;




async function signIn(params: SignInParams): Promise<SignInResult> {
  const { nickname, password } = params;

  const user = await getUserOrFail(nickname);

  await validatePasswordOrFail(password, user.password);
  const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET);

  return {
    user: {id:user.id,nickname:user.nickname,code:user.code},
    token,
  };
}

async function getUserOrFail(nickname: string): Promise<User> {
  const user = await userRepository.findByNickname(nickname);
  if (!user) throw invalidCredentialsError();

  return user;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw invalidCredentialsError();
}

export type SignInParams = Pick<User, "nickname" | "password">;

type SignInResult = {
  user: Pick<User, "id" | "nickname" | "code">;
  token: string;
};

const authenticationService = {
  signIn,  
  createUser,
};

export default authenticationService;
