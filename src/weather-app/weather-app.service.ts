import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { response } from 'express';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WeatherAppService {
  constructor(
    private weatherApi: HttpService,
    private env: ConfigService,
  ) {}

  async callW(city: string) {
    let apiKey = this.env.get('apikey');

   let response = await firstValueFrom( this.weatherApi.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,)
    );

    return response.data
  }
}
