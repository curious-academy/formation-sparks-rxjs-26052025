import { Item } from "./item";

export interface CartState {
  items: Item[],
  quantity: number,
  totalPrice: number
}

export const initialCartState: CartState = {
  items: [],
  quantity: 0,
  totalPrice: 0
}
