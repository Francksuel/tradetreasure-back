import availableItemRepository from '@/repositories/availableItem.repository';

async function createAvailableItem(userId: number, pokemonId: number) {
  const availableItem = await availableItemRepository.create({
    pokemonId,
    userId,
  });

  return availableItem;
}

const availableItemService = {
  createAvailableItem,
};

export default availableItemService;
