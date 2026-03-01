import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config'; // 1. Add this import
import { WeatherAppService } from './weather-app.service';
import { WeatherAppController } from './weather-app.controller';


@Module({
  imports: [
    HttpModule, 
    ConfigModule 
  ],
  providers: [WeatherAppService],
  controllers: [WeatherAppController],
})
export class WeatherAppModule {}