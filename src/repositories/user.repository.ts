import { prisma } from "@/config";
import { Prisma, User } from "@prisma/client";

async function findByNickname(nickname: string): Promise<User> {
  return await prisma.user.findFirst({
    where: {
      nickname,
    },
  });
}
async function findByCode(code: string) {  
  return prisma.user.findUnique({where:{code}});
}


async function create(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data,
  });
}

const userRepository = {
  findByNickname,
  findByCode,
  create,
};

export default userRepository;