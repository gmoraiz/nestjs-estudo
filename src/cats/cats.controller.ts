import { Body, Controller, Post } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return {
      msg: 'Eis o gato',
      data: createCatDto,
    };
  }
}
