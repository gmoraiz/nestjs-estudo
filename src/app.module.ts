/*
  O principal módulo da aplicação.
*/

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudoController } from './cats/estudo.controller';

@Module({
  imports: [],
  controllers: [AppController, EstudoController],
  providers: [AppService],
})
export class AppModule {}
