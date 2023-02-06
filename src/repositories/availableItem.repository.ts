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

async function deleteByItemId(availableItemId: number) {
  return prisma.availablePokemon.delete({
    where: {  
      id: availableItemId,   
    }   
  });
}

const availableItemRepository = {
  create,
  listByUserId,
  deleteByItemId,
};

export default availableItemRepository;
