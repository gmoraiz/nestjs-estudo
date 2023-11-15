import { Injectable } from '@nestjs/common';
import { CreateGeneratedResourceDto } from './dto/create-generated-resource.dto';
import { UpdateGeneratedResourceDto } from './dto/update-generated-resource.dto';

@Injectable()
export class GeneratedResourceService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createGeneratedResourceDto: CreateGeneratedResourceDto) {
    return 'This action adds a new generatedResource';
  }

  findAll() {
    return `This action returns all generatedResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generatedResource`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateGeneratedResourceDto: UpdateGeneratedResourceDto) {
    return `This action updates a #${id} generatedResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} generatedResource`;
  }
}
