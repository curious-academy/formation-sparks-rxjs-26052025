import { Component, inject } from '@angular/core';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  private readonly service = inject(SearchService)

  search(): void {
    this.service.dispatch('coucou')
  }
}
