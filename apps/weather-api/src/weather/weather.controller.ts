import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')  // Define la ruta base `/weather` para las solicitudes relacionadas al clima.
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  getWeather(@Query('city') city: string) {
    return this.weatherService.getWeather(city);  // Llama al servicio con la ciudad especificada.
  }
}