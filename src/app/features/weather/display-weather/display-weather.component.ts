import { Component, inject } from '@angular/core';
import { WeatherBusinessService } from '../services/weather-business.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-display-weather',
  imports: [AsyncPipe],
  templateUrl: './display-weather.component.html',
  styleUrl: './display-weather.component.css'
})
export class DisplayWeatherComponent {
  weather$ = inject(WeatherBusinessService).getOne()
}
