import { Module } from '@nestjs/common';
import { GeneratedResourceService } from './generated-resource.service';
import { GeneratedResourceController } from './generated-resource.controller';

@Module({
  controllers: [GeneratedResourceController],
  providers: [GeneratedResourceService],
})
export class GeneratedResourceModule {}
