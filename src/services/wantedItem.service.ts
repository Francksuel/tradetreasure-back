import wantedItemRepository from '@/repositories/wantedItem.repository';

async function createWantedItem(userId: number, pokemonId: number) {
  const wantedItem = await wantedItemRepository.create({
    pokemonId,
    userId,
  });

  return wantedItem;
}

async function listWantedItens(userId: number) {
  const wantedItem = await wantedItemRepository.listByUserId(userId);
  return wantedItem;
}

async function deleteWantedItem(wantedItemId: number) {
  return await wantedItemRepository.deleteByItemId(wantedItemId);  
}

const wantedItemService = {
  createWantedItem,
  listWantedItens,
  deleteWantedItem
};

export default wantedItemService;
