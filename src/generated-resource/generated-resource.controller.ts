import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GeneratedResourceService } from './generated-resource.service';
import { CreateGeneratedResourceDto } from './dto/create-generated-resource.dto';
import { UpdateGeneratedResourceDto } from './dto/update-generated-resource.dto';

@Controller('generated-resource')
export class GeneratedResourceController {
  constructor(
    private readonly generatedResourceService: GeneratedResourceService,
  ) {}

  @Post()
  create(@Body() createGeneratedResourceDto: CreateGeneratedResourceDto) {
    return this.generatedResourceService.create(createGeneratedResourceDto);
  }

  @Get()
  findAll() {
    return this.generatedResourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generatedResourceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGeneratedResourceDto: UpdateGeneratedResourceDto,
  ) {
    return this.generatedResourceService.update(
      +id,
      updateGeneratedResourceDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generatedResourceService.remove(+id);
  }
}
