import { Test, TestingModule } from '@nestjs/testing';
import { WeatherAppService } from './weather-app.service';

describe('WeatherAppService', () => {
  let service: WeatherAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherAppService],
    }).compile();

    service = module.get<WeatherAppService>(WeatherAppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
