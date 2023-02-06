import { prisma } from '@/config';
import { Prisma } from '@prisma/client';

async function create(data: Prisma.AvailablePokemonUncheckedCreateInput) {
  return prisma.availablePokemon.create({
    data,
  });
}

async function listByUserId(userId: number) {
  return prisma.availablePokemon.findMany({
    where: {
      userId,
      AND: { isTraded: false },
    },
    include: {
      Pokemon: true,
      User:true,
    },
  });
}

const availableItemRepository = {
  create,
  listByUserId,
};

export default availableItemRepository;
