import { inject, Injectable } from '@angular/core';
import { GetOneWeatherService } from './get-one-weather.service';
import { filter, map, Observable, startWith } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherBusinessService {
  private readonly getOneService = inject(GetOneWeatherService)
  private readonly weather$ = this.getOneService.getOne()

  getOne(): Observable<Weather> {
    return this.weather$.pipe(
      startWith({ current: { temperature_2m: 18}}), // genere un next
      filter(item => item.current.temperature_2m > 0), //lors du next
      map(item => ({ temp: item.current.temperature_2m })) //lors du next
    )
  }
}
