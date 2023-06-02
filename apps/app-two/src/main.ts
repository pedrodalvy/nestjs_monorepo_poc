import { NestFactory } from '@nestjs/core';
import { AppTwoModule } from './app-two.module';

async function bootstrap() {
  const app = await NestFactory.create(AppTwoModule);
  await app.listen(3002);
}
bootstrap();
