import { Component } from '@angular/core';
import { combineLatest, map, of, shareReplay, tap } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  imports: [],
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.css'
})
export class CombineLatestComponent {
  ngOnInit(): void {
    const weights$ = of(70, 80, 90, 100);
    const heights$ = of(1.70, 1.80, 1.90, 2.00);

    const imc$ = combineLatest([weights$, heights$]).pipe(
      tap(console.info),
      map(([weight, height]) => weight / (height * height)),
      shareReplay(4)
    )

    imc$.subscribe({
      next: console.info
    })
  }
}
