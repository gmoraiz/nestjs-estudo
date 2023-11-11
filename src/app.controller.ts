/*
  - Um controlador básico com uma única rota.
  - Se o retorno do response for um array ou objeto, ele será serializado para JSON.
  - Se o retorno do response for um dado primitivo do javascript, não haverá serialização.
*/

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
