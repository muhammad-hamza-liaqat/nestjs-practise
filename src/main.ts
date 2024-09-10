import { startServer } from './config/server.listen';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  await startServer();
}

bootstrap();
