import { Component, ElementRef, viewChild } from '@angular/core';
import { concat, concatAll, concatMap, debounceTime, fromEvent, interval, map, merge, mergeMap, Observable, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-from-event',
  imports: [],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.css'
})
export class FromEventComponent {
  btnStart = viewChild<ElementRef<HTMLButtonElement>>('btnStart')
  listenButton$: Observable<Event> | undefined
  tick = 0
  idInterval: any

  ngOnInit(): void {
    const first$ = interval(2500)
    const second$ = interval(1000)

    // const click$ = fromEvent(document, 'click').pipe(tap(() => console.info('Button clicked')))
    // const result$ = click$.pipe(debounceTime(1000))

    // result$.subscribe({
    //   next: console.info
    // })

    // merge(first$, second$)
    // .subscribe({
    //   next: console.info
    // })

    // concat(first$.pipe(take(10)), second$)
    // .subscribe({
    //   next: console.info
    // })

    const button = this.btnStart()?.nativeElement
    if(button) {
      this.listenButton$ = fromEvent(button, 'click')

      this.listenButton$
      .pipe(
        tap(() => console.info('Button clicked')),
        debounceTime(300),
        // map(() => interval(1000))
        // mergeMap(() => interval(1000))
        switchMap(() => interval(1000).pipe(take(60)))
        //concatMap(() => interval(1000).pipe(take(10)))
      )
      .subscribe({
        next: (tick) => {
          this.tick = tick
        //   this.tick = 0

        //   if(this.idInterval) {
        //     clearInterval(this.idInterval)
        //   }

        //   this.idInterval = setInterval(() => {
        //     this.tick ++
        //   }, 1000)
        }
      })
    }
  }
}
