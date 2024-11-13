import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

@Module({
  imports: [HttpModule],  // Importamos el módulo HTTP para hacer peticiones a la API de clima.
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}