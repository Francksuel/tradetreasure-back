import availableItemRepository from '@/repositories/availableItem.repository';

async function createAvailableItem(userId: number, pokemonId: number) {
  const availableItem = await availableItemRepository.create({
    pokemonId,
    userId,
  });

  return availableItem;
}

async function listAvailableItens(userId: number) {
  const availableItem = await availableItemRepository.listByUserId(userId);
  return availableItem;
}

async function deleteAvailableItem(availableItemId: number) {
  return await availableItemRepository.deleteByItemId(availableItemId);  
}

const availableItemService = {
  createAvailableItem,
  listAvailableItens,
  deleteAvailableItem,
};

export default availableItemService;
