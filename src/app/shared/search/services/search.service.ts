import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { initialValue, SearchState } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly store$ = new BehaviorSubject<SearchState>(initialValue)

  dispatch(value: string): void {
    this.store$.next({item: value});
  }

  get asObservable(): Observable<SearchState> {
    return this.store$.asObservable()
  }
}
