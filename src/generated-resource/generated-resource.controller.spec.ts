import { Test, TestingModule } from '@nestjs/testing';
import { GeneratedResourceController } from './generated-resource.controller';
import { GeneratedResourceService } from './generated-resource.service';

describe('GeneratedResourceController', () => {
  let controller: GeneratedResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneratedResourceController],
      providers: [GeneratedResourceService],
    }).compile();

    controller = module.get<GeneratedResourceController>(
      GeneratedResourceController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
