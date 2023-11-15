/*
  O principal módulo da aplicação.
*/

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudoController } from './estudo.controller';
import { CatsController } from './cats/cats.controller';
import { GeneratedResourceModule } from './generated-resource/generated-resource.module';

@Module({
  imports: [GeneratedResourceModule],
  controllers: [AppController, EstudoController, CatsController],
  providers: [AppService],
})
export class AppModule {}
