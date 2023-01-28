-- CreateEnum
CREATE TYPE "TradeStatus" AS ENUM ('REQUESTED', 'REALIZED', 'REJECTED');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nickname" VARCHAR(20) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "code" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pokemon" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(70) NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WantedPokemon" (
    "id" SERIAL NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WantedPokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailablePokemon" (
    "id" SERIAL NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AvailablePokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trade" (
    "id" SERIAL NOT NULL,
    "wantedPokemonId" INTEGER NOT NULL,
    "availablePokemonId" INTEGER NOT NULL,
    "requestingUserId" INTEGER NOT NULL,
    "status" "TradeStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nickname_key" ON "User"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "User_code_key" ON "User"("code");

-- CreateIndex
CREATE UNIQUE INDEX "WantedPokemon_userId_key" ON "WantedPokemon"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AvailablePokemon_userId_key" ON "AvailablePokemon"("userId");

-- AddForeignKey
ALTER TABLE "WantedPokemon" ADD CONSTRAINT "WantedPokemon_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WantedPokemon" ADD CONSTRAINT "WantedPokemon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailablePokemon" ADD CONSTRAINT "AvailablePokemon_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailablePokemon" ADD CONSTRAINT "AvailablePokemon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_wantedPokemonId_fkey" FOREIGN KEY ("wantedPokemonId") REFERENCES "WantedPokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_availablePokemonId_fkey" FOREIGN KEY ("availablePokemonId") REFERENCES "AvailablePokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_requestingUserId_fkey" FOREIGN KEY ("requestingUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
