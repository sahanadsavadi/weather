import { Component } from '@angular/core';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';
 
  constructor(private WeatherService:WeatherService) {
    WeatherService.getWeatherData('tehran')
    
  }
}
