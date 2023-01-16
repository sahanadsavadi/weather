import { Component } from '@angular/core';
import { WeatherService } from './service/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private WeatherService: WeatherService) {}
  click(v:string) {
    if (v) {
      this.WeatherService.getWeatherData(v);
    }
  }
}
