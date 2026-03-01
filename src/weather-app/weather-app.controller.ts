import { Controller, Get, Param } from '@nestjs/common';
import { WeatherAppService } from './weather-app.service';
import { firstValueFrom } from 'rxjs';

@Controller({ host: ':app' })
export class WeatherAppController {
  constructor(private weatherAppService: WeatherAppService) {}

  @Get('today/:cityName')
  async getTodayWeatherCity(@Param('cityName') cityName: any) {

  let result=  await this.weatherAppService.callW(cityName);
  
//    const display= {
//       city: weatherData.data.name,
//       temperature: weatherData.data.main.temp,
//       description: weatherData.data.weather[0].description,
//       humidity: weatherData.data.main.humidity,
//     };
  console.log({main: result.weather.main ,
              cityName: result.name,
              
    
  });
    return result
  }
}
