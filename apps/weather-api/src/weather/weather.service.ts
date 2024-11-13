import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  private readonly apiKey = 'c41e569febe20ad6e897a710d597b729';  // Obtiene la clave de API desde las variables de entorno.
  private readonly apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private readonly httpService: HttpService) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
    return this.httpService.get(url).pipe(
      map(response => response.data)  // Procesa la respuesta de la API y retorna solo los datos.
    );
  }
}