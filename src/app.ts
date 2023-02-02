import express, { Express } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { authenticationRouter } from './routes/authentication.routes';
import { connectDb, disconnectDb, loadEnv } from './config';
import { itemRouter } from './routes/item.routes';
import { populatePokemons } from './utils/populatePokemons';
import { wantedItemRouter } from './routes/wantedItem.routes';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', async (req, res) => res.send('OK!'))
  .use('/auth', authenticationRouter)
  .use('/item', itemRouter)
  .use('/wanted', wantedItemRouter);

export async function init(): Promise<Express> {
  connectDb();
  populatePokemons();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDb();
}

export default app;
