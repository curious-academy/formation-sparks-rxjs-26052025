import { inject, Injectable } from '@angular/core';
import { Observable, share, shareReplay, switchMap } from 'rxjs';
import { Movies } from '../models';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetListMoviesService {
  private readonly http = inject(HttpClient)
  private currentRoute = inject(ActivatedRoute)

  // private test$ = this.currentRoute.params.pipe(
  //   switchMap(route => this.http.get('' + route['id'])),
  //   shareReplay(1)
  // )
  private readonly movies$ = inject(HttpClient).get('').pipe(shareReplay(1))

  getListAll() {
    return this.movies$;
  }

  // getListAll() {
  //   return this.http.get('') //recrée une instance d'observable
  // }

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
