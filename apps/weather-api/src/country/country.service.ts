import { Injectable } from '@nestjs/common';

@Injectable()
export class CountryService {
  private readonly apiUrl = 'https://restcountries.com/v3.1/name/';
  
  private readonly config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  /**
   * Método para buscar un país por nombre usando fetch
   */
  async findOne(countryName: string): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}${countryName}`, this.config);
      
      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`Error al obtener datos del país: ${response.statusText}`);
      }
      
      // Obtiene los datos en formato JSON
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al buscar el país:', error);
      throw error;
    }
  }

  async findByCity(cityName: string): Promise<any> {
    try {
      // Utiliza la misma API, aunque aquí podrías ajustar si tienes otra API para ciudades.
      const response = await fetch(`${this.apiUrl}${cityName}`, this.config);

      if (!response.ok) {
        throw new Error(`Error al obtener datos de la ciudad: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al buscar la ciudad:', error);
      throw error;
    }
  }
}
