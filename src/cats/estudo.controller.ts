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
} from '@nestjs/common';
import { Request, Response } from 'express';

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
}
