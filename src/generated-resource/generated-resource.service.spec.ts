import { Test, TestingModule } from '@nestjs/testing';
import { GeneratedResourceService } from './generated-resource.service';

describe('GeneratedResourceService', () => {
  let service: GeneratedResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneratedResourceService],
    }).compile();

    service = module.get<GeneratedResourceService>(GeneratedResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
