/*
  O arquivo de entrada da aplicação que usa a função essencial NestFactory para criar uma instância do aplicativo Nest.
  Por padrão, o express é utilizado como servidor.
*/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
