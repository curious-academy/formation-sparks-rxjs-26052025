import { Injectable } from '@angular/core';
import { from, of, scan, Subject } from 'rxjs';
import { CartState, initialCartState } from '../models/state';
import { CartAction } from '../models/action';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class CartBusinessService {
  private readonly store$ = new Subject<CartState>()

  addOne(action: CartAction): void {
    this.store$.pipe(
      scan((oldState, current) => {
        const newState: CartState = {
          items: [...oldState.items, action.item!],
          quantity: oldState.quantity + 1,
          totalPrice: oldState.totalPrice + action.item!.price
        }

        return newState
      })
    )
  }
  //fromPromess = from(new Promise())


}
