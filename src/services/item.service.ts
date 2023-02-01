import itemRepository from '@/repositories/item.repository';

async function getItens(name: string) {
  const minChar = 3;
  if (name.length < minChar) {
    return [];
  }
  return await itemRepository.listItemsByName(name);
}

const itemService = {
  getItens,
};

export default itemService;
