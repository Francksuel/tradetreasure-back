import { prisma } from '@/config';
import { Prisma } from '@prisma/client';

async function create(data: Prisma.WantedPokemonUncheckedCreateInput) {
  return prisma.wantedPokemon.create({
    data,
  });
}

async function findByItemId(pokemonId: number, userId: number) {
  return prisma.wantedPokemon.findMany({
    where: {
      AND: [{ pokemonId: { equals: pokemonId } }, { isTraded: false }, { userId: { not: { equals: userId } } }],
    },
    include: {
      Pokemon: true,
      User: true,
    }
  });
}

async function listByUserId(userId: number) {
  return prisma.wantedPokemon.findMany({
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

const wantedItemRepository = {
  create,
  findByItemId,
  listByUserId,
};

export default wantedItemRepository;
