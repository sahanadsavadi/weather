import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { WeatherData } from './model/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  WeatherData?: WeatherData;
  CityName: string = 'Alaska';

  constructor(private WeatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.CityName);
    this.CityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.CityName);
    this.CityName = '';
  }

  private getWeatherData(cityName: string) {
    if (cityName) {
      this.WeatherService.getWeatherData(cityName).subscribe({
        next: (response) => {
          this.WeatherData = response;
        },
      });
    }
  }
}
