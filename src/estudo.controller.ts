/*
  Decoradores para todo tipo de requisição:
  @Get(), @Post(), @Put(), @Delete(), @Patch(),
  @Options(), @Head(), @All()
*/

import {
  Controller,
  Get,
  HttpCode,
  Next,
  Param,
  Req,
  Res,
  Session,
  Body,
  Query,
  Headers,
  HostParam,
  Ip,
  Header,
  Redirect,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, delay, of } from 'rxjs';

@Controller('estudo')
export class EstudoController {
  @Get('req')
  req(@Req() request: Request) {
    return request.header;
  }

  @Get('resExpress')
  resExpress(@Res() response: Response) {
    response.status(200).send('Response express, sem o passThrough');
  }

  @Get('res')
  @HttpCode(202)
  res(@Res({ passthrough: true }) response: Response) {
    return `[${response.statusCode}] response nest, com o passthrough`;
  }

  @Get('next')
  next(@Next() next) {
    return `next rota, não entendi como funciona... ${next.toString()}`;
  }

  @Get('session')
  session(@Session() session) {
    return `session: ${session}`;
  }

  @Get('param/:id')
  param(@Param() param) {
    return param;
  }

  @Get('body')
  body(@Body() body) {
    return body;
  }

  @Get('query')
  query(@Query() query) {
    return query;
  }

  @Get('headers')
  headers(@Headers() headers) {
    return headers;
  }

  @Get('ip')
  ip(@Ip() ip) {
    return ip;
  }

  @Get('hostParam')
  hostParam(@HostParam() hostParam) {
    return hostParam;
  }

  @Get('ab*cd')
  @Header('Cache-Control', 'none')
  @Redirect('https://monadaweb.com.br', 301)
  wildcard() {
    return 'rota coringa, baseada em modelos...';
  }

  @Get('promise')
  async promise() {
    const streamWrite = (msg, time) =>
      new Promise((resolve) => {
        setTimeout(() => {
          console.log(msg);
          resolve(null);
        }, time);
      });

    await streamWrite('Primeira mensagem', 2000);
    await streamWrite('Segunda mensagem', 5000);
    await streamWrite('Terceira mensagem', 1000);
    await streamWrite('Quarta mensagem', 500);
  }

  @Get('observable')
  observable(): Observable<any[]> {
    return of([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ]).pipe(delay(2000));
  }
}
