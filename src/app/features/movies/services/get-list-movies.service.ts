import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GetListMoviesService {
  private readonly list$ = new Observable<Movies>(subscriber => {
    const array: Movies = [{  title: 'Movie 1', year: 2019 }, { title: 'Movie 2', year: 2021}]

    setTimeout(() => {
      subscriber.next(array)
    }, 1000)

    setTimeout(() => {
      const newArray = [...array, {  title: 'Movie 3', year: 2018 }, {  title: 'Movie 4', year: 2020 }]
      subscriber.next(newArray)
    }, 2000)

    setTimeout(() => {
      const newArray = [...array]

      newArray.pop();

      subscriber.next(newArray)
      subscriber.complete()
    }, 3000)
  })

  getList(): Observable<Movies> {
    return this.list$
  }
}
