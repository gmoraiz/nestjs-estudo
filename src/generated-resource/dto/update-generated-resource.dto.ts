import { PartialType } from '@nestjs/mapped-types';
import { CreateGeneratedResourceDto } from './create-generated-resource.dto';

export class UpdateGeneratedResourceDto extends PartialType(
  CreateGeneratedResourceDto,
) {}
