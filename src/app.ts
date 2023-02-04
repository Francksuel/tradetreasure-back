import express, { Express } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { connectDb, disconnectDb, loadEnv } from './config';
import { populatePokemons } from './utils/populatePokemons';
import { authenticationRouter, availableItemRouter, itemRouter, tradeRouter, wantedItemRouter } from './routes';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', async (req, res) => res.send('OK!'))
  .use('/auth', authenticationRouter)
  .use('/item', itemRouter)
  .use('/wanted', wantedItemRouter)
  .use('/available', availableItemRouter)
  .use('/trade', tradeRouter);

export async function init(): Promise<Express> {
  connectDb();
  populatePokemons();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDb();
}

export default app;
