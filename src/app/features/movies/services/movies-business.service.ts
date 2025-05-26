import { inject, Injectable } from '@angular/core';
import { GetListMoviesService } from './get-list-movies.service';
import { filter, map, Observable, startWith, tap } from 'rxjs';
import { Movies } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MoviesBusinessService {
  private readonly list$ = inject(GetListMoviesService).getList()

  getList(): Observable<Movies> {
    return this.list$
    .pipe(
      startWith([]), // ETAPE 00
      tap(item => console.info('1', item)),// ETAPE 02
      filter(items => items.length > 0), // ETAPE 02
      tap(item => console.info(item)), // ETAPE 01
      // s'exécute pour chaque next de l'observable
      map((movies: Movies) => {// ETAPE
        console.info('movies ??')
        const moviesResult = movies.filter(movie => movie.year > 2020); //next qui est fait (en interne)
        return moviesResult
      }),
      tap(item => console.info('2', item)),// ETAPE 03
      // s'exécute pour chaque next de l'observable
    );
  }
}
