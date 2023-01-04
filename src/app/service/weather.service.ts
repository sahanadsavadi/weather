import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeatherData(cityName: string) {
    this.http.get(`${environment.urlApi}/city/${cityName}`,{
      headers:new HttpHeaders()
      .set('X-RapidAPI-Key',environment.keyApi)
      .set('X-RapidAPI-Host',environment.hostApi),
    }).subscribe();
  }
}
