import { prisma } from '@/config';
import { PokemonData } from '@/protocols';
import { getPokemon } from './pokeApi.service';

export async function populatePokemons() {
  const havePokemon = await prisma.pokemon.findFirst();  
  if (!havePokemon) {
    const pokemonsData = await getPokemon();
    Promise.all(pokemonsData.map(async (pokemon: PokemonData) => {
      await prisma.pokemon.create({
        data: {
          name: pokemon.name,
          image: pokemon.image,
        },
      });
    }));
  }
}
