import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.AvailablePokemonUncheckedCreateInput) {
    return prisma.availablePokemon.create({
      data,
    });
  }

  const availableItemRepository = {
    create,
  };
  
  export default availableItemRepository;