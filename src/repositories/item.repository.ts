import { prisma } from '@/config';
import { PokemonData } from '@/protocols';

async function listItemsByName(name: string): Promise<PokemonData[]> {
  return await prisma.pokemon.findMany({
    where: {
      name: {
        contains: name,
      },
    },
  });
}
const itemRepository = {
  listItemsByName,
};

export default itemRepository;
