import { Component, inject } from '@angular/core';
import { SearchService } from '../../../shared/search/services/search.service';
import { GetListMoviesService } from '../../movies/services/get-list-movies.service';
import { GetListService } from '../services/get-list.service';
import { combineLatest, debounceTime, distinctUntilChanged, map, retry, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [AsyncPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  private readonly searchService = inject(SearchService)
  private readonly getListService = inject(GetListService)

  // videoGames$ = this.searchService.asObservable.pipe(
  //   // debounceTime(200),
  //   // distinctUntilChanged(),
  //   switchMap(search => this.getListService.getList(search.item)),
  //   //retry(1)
  // )

  videoGames$ = combineLatest([this.searchService.asObservable, this.getListService.getList()]).pipe(
    map(value => {
      return value[1].filter(item => item.title.includes(value[0].item))
    })
  )

}
