import { Component } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  city = 'tehran';


  constructor(private WeatherService: WeatherService) {}
  click() {
    this.WeatherService.getWeatherData(this.city);
  }
}
