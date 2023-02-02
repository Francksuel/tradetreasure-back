import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.WantedPokemonUncheckedCreateInput) {
    return prisma.wantedPokemon.create({
      data,
    });
  }

  const wantedItemRepository = {
    create,
  };
  
  export default wantedItemRepository;