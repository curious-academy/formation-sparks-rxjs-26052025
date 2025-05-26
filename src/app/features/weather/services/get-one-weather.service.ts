import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WeatherDto } from '../models/dtos';
import { Observable } from 'rxjs';

const url = 'https://api.open-meteo.com/v1/forecast?latitude=48.083328&longitude=-1.68333&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m'

@Injectable({
  providedIn: 'root'
})
export class GetOneWeatherService {
  private readonly http = inject(HttpClient)
  private readonly weather$ = this.http.get<WeatherDto>(url)

  getOne(): Observable<WeatherDto> {
    return this.weather$
  }
}
