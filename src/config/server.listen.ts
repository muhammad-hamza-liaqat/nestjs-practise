import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { connectionWithDB } from './mongoose.connection';

export const startServer = async () => {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;
  try {
    await connectionWithDB();
    await app.listen(port);
    console.log(`server is running at http:/localhost:${port}/`);
  } catch (error) {
    console.log('failed to start the server', error.message);
    process.exit(1);
  }
};
