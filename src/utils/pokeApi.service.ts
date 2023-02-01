import { ApiResult, PokemonData } from '@/protocols';
import { request } from './request';

async function getPokemon(): Promise<PokemonDataApi[]> {
  const result = await request.get('https://pokeapi.co/api/v2/pokemon?limit=500&offset=0');

  if (result.data) {
    result.data = Promise.all(
      result.data.results.map(async (pokemon: ApiResult) => {
        const pokemonInfo = await request.get(pokemon.url);
        return {
          name: pokemonInfo.data.name,
          image: pokemonInfo.data.sprites.front_default,
        };
      }),
    );
  }

  return result.data;
}

type PokemonDataApi = Pick<PokemonData, 'name' | 'image'>;

export { getPokemon };
