import { Component } from '@angular/core';
import { interval, scan } from 'rxjs';

@Component({
  selector: 'app-scan',
  imports: [],
  templateUrl: './scan.component.html',
  styleUrl: './scan.component.css'
})
export class ScanComponent {
  cumul$ = interval(1000).pipe(
    scan((acc, curr) => acc + curr)
  )

  ngOnInit(): void {
    this.cumul$.subscribe({
      next: item => {
        console.info(item)
      }
    })

  }
}
