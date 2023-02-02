-- AlterTable
ALTER TABLE "AvailablePokemon" ADD COLUMN     "isTraded" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "WantedPokemon" ADD COLUMN     "isTraded" BOOLEAN NOT NULL DEFAULT false;
