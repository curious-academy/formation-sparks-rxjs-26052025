import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { VideoGame } from '../models/video-game';

@Injectable({
  providedIn: 'root'
})
export class GetListService {
  private readonly list$ = of([ { id: 1, title: 'Game 1' }, { id: 2, title: 'Game 2' } ]).pipe(delay(100))

  getList(query ?: string): Observable<VideoGame[]> {
    return this.list$;
  }
}
