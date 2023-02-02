import wantedItemRepository from '@/repositories/wantedItem.repository';

async function createWantedItem(userId: number, pokemonId: number) {
  const wantedItem = await wantedItemRepository.create({
    pokemonId,
    userId,
  });

  return wantedItem;
}

const wantedItemService = {
  createWantedItem,
};

export default wantedItemService;
