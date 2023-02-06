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

const availableItemService = {
  createAvailableItem,
  listAvailableItens,
};

export default availableItemService;
