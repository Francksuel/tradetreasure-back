import express, { Express } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { authenticationRouter } from './routes/authentication.routes';
import { connectDb, disconnectDb, loadEnv } from './config';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', async (req, res) => res.send('OK!'))
  .use('/auth', authenticationRouter);

export async function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDb();
}

export default app;
