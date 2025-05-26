import { Component, inject } from '@angular/core';
import { GetListMoviesService } from '../services/get-list-movies.service';
import { AsyncPipe } from '@angular/common';
import { MoviesBusinessService } from '../services/movies-business.service';

@Component({
  selector: 'app-list',
  imports: [AsyncPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  // private readonly service = inject(GetListMoviesService)
  // list$ = this.service.getList()

  list$ = inject(MoviesBusinessService).getList()
}
