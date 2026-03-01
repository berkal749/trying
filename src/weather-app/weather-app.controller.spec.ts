import { Test, TestingModule } from '@nestjs/testing';
import { WeatherAppController } from './weather-app.controller';

describe('WeatherAppController', () => {
  let controller: WeatherAppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeatherAppController],
    }).compile();

    controller = module.get<WeatherAppController>(WeatherAppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
