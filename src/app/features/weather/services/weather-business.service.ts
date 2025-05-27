import { inject, Injectable } from '@angular/core';
import { GetOneWeatherService } from './get-one-weather.service';
import { filter, map, Observable, repeat, startWith, tap } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherBusinessService {
  private readonly getOneService = inject(GetOneWeatherService)
  private readonly weather$ = this.getOneService.getOne()

  getOne(): Observable<Weather> {
    return this.weather$.pipe(
      tap(item => console.log('item', item)), // genere un next
      //startWith({ current: { temperature_2m: 18}}), // genere un next
      filter(item => item.current.temperature_2m > 0), //lors du next
      map(item => ({ temp: item.current.temperature_2m })), //lors du next
      repeat({ delay: 100500 })
    )
  }
}
