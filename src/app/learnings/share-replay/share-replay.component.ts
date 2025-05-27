import { Component } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  imports: [],
  templateUrl: './share-replay.component.html',
  styleUrl: './share-replay.component.css'
})
export class ShareReplayComponent {
  ngOnInit(): void {
    const ob$ = new Observable<number>(observer => {
      setTimeout(() => {
        console.info('1° settimeout')
        observer.next(100)
      }, 1000)

      setTimeout(() => {
        console.info('2° settimeout')
        observer.next(200)
      }, 2000)

      setTimeout(() => {
        console.info('3° settimeout')
        observer.next(300)
        observer.complete()
      }, 3000)
    }).pipe(
      shareReplay(3, 3000) // partage de context entre observers
    )

    ob$.subscribe({
      next: console.info
    })

    ob$.subscribe({
      next: console.info
    })
  }
}
