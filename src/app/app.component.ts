import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { delay, map, Observable, Observer, of, startWith } from 'rxjs';
import { DisplayWeatherComponent } from "./features/weather/display-weather/display-weather.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplayWeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-rxjs';

  ngOnInit(): void {
    // const obs$ = of('Données récupérées').pipe(delay(1500))
    // obs$
    // .pipe(
    //   startWith('Chargement en cours ...'),
    //   map(item => item + ' !')
    // )
    // .subscribe({
    //   next: item => console.info('item', item)
    // })
    // console.info('****************')

    // const obs$ = new Observable<string>(subscriber => { // lazy Observable
    //   console.info('Code SYNC')

    //   subscriber.next('44')
    //   setTimeout(() => {
    //     console.info('Code ASYNC')
    //     subscriber.next('42')
    //     subscriber.next('43')
    //   }, 10000)

    //   const maVar = 42 // recréé à chaque fois
    // })

    // obs$.subscribe() // Execute une fois

    // const subscriber: Partial<Observer<string>> = {
    //   next: item => console.info(item)
    // }

    // obs$.subscribe(subscriber) // Execute une seconde fois
    // //obs$.subscribe(subscriber)
    // //obs$.subscribe(item => console.info(item))

    // console.info('-----------')
  }
}
