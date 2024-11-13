import { Controller,Get,Param,Query } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
    constructor(private readonly countryService: CountryService) {}

    @Get(':name')
    async getCountry(@Param('name') countryName: string) {
      const country = await this.countryService.findOne(countryName);
      return country;
    }

      // Buscar por ciudad usando query params
  @Get()
  async getCity(@Query('name') cityName: string) {
    if (!cityName) {
      return { message: 'Por favor, proporciona el nombre de la ciudad en el parámetro de consulta.' };
    }

    const city = await this.countryService.findByCity(cityName);
    return city;
  }
}
