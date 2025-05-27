import { Component } from '@angular/core';
import { BehaviorSubject, interval, map, Observable, ReplaySubject, share, shareReplay, Subject, take, tap } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  imports: [],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.css'
})
export class ReplaySubjectComponent {
//  subject = new Subject<number>()
// subject = new BehaviorSubject<number>(10)
subject = new ReplaySubject<number>(5)

  ngOnInit(): void {
    // COLD
    // const obs$ = new Observable<number>(sub => {
    //   sub.next(Math.random() * 100)
    //   sub.next(Math.random() * 100)
    //   sub.next(Math.random() * 100)
    // }).pipe(
    //   // shareReplay(2)
    // )

    // obs$.subscribe({
    //   next: console.info
    // })
    // obs$.subscribe({
    //   next: console.info
    // })

    this.subject.subscribe({
      next: console.info
    })

    this.subject.subscribe({
      next: item => console.info('sub2', item)
    })
    //const bs$ = new BehaviorSubject<number>()
    //const subject = new ReplaySubject<number>(3)
  }

  add(): void {
    //console.info('value: ', this.subject.value)

    this.subject.next(Math.random() * 100)

    this.subject.subscribe({
      next: item => console.info('sub3', item)
    })
  }
}
