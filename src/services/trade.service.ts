import availableItemRepository from '@/repositories/availableItem.repository';
import wantedItemRepository from '@/repositories/wantedItem.repository';
import { AvailablePokemon, WantedPokemon } from '@prisma/client';

async function getTrades(userId: number) {
  const userAvailableItens = await availableItemRepository.listByUserId(userId);
  const userWantedItens = await wantedItemRepository.listByUserId(userId);
  const matchsFound: Array<[AvailablePokemon, WantedPokemon]> = [];
  const matchWantedItens = await Promise.all(
    userAvailableItens.map(async (item) => {
      return await wantedItemRepository.findByItemId(item.pokemonId, userId);
    }),
  );
  await Promise.all(
    matchWantedItens.map(async (wantedItens) => {
      await Promise.all(
        wantedItens.map(async (item) => {
          const availableItem = await availableItemRepository.listByUserId(item.userId);
          availableItem.forEach((anotherUserItem) => {
            userWantedItens.forEach((userItem) => {
              if (userItem.pokemonId === anotherUserItem.pokemonId) {
                matchsFound.push([userItem, item]);
              }
            });
          });
        }),
      );
    }),
  );

  return matchsFound;
}

const tradeService = {
  getTrades,
};

export default tradeService;
