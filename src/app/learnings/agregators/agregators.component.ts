import { Component } from '@angular/core';
import { of, zip } from 'rxjs';

@Component({
  selector: 'app-agregators',
  imports: [],
  templateUrl: './agregators.component.html',
  styleUrl: './agregators.component.css'
})
export class AgregatorsComponent {
  ngOnInit(): void {
    const firstNames$ = of('Evan', 'June', 'Dayle', 'Alva')
    const points$ = of(10, 100, 101)

    zip(firstNames$, points$).subscribe({
      next: ([firstName, points]) => {
        console.log(firstName, points)
      }
    })
  }
}
