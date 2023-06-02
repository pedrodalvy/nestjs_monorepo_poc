import { NestFactory } from '@nestjs/core';
import { AppOneModule } from './app-one.module';

async function bootstrap() {
  const app = await NestFactory.create(AppOneModule);
  await app.listen(3001);
}
bootstrap();
