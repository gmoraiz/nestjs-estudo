/*
  - O arquivo de entrada da aplicação que usa a função essencial NestFactory para criar uma instância do aplicativo Nest.
  - Por padrão, o express é utilizado como servidor. Mas é possível utilizar o Fastify, bastando passá-lo
  pelo segundo parâmetro da função create do NestFactory.
  - É possível utilizar o SWC builder para performar o processo de build.
  - Gerador de CRUD: nest g resource [name]
  - Gerador de Controller: nest g controller [name]
*/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
