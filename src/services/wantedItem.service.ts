import wantedItemRepository from '@/repositories/wantedItem.repository';

async function createWantedItem(userId: number, pokemonId: number) {
  const newBookingId = await wantedItemRepository.create({
    pokemonId,
    userId,
  });

  return newBookingId;
}

const wantedItemService = {
  createWantedItem,
};

export default wantedItemService;
