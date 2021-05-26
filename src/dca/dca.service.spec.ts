import { Test, TestingModule } from '@nestjs/testing';
import { DcaService } from './dca.service';

describe('DcaService', () => {
  let service: DcaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DcaService],
    }).compile();

    service = module.get<DcaService>(DcaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
