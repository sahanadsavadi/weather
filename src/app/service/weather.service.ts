import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../model/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `${environment.urlApi}/city/${cityName}`,
      {
        headers: new HttpHeaders()
          .set('X-RapidAPI-Key', environment.keyApi)
          .set('X-RapidAPI-Host', environment.hostApi),
      }
    );
    // .pipe(take(1))
    // .subscribe();
  }
}
