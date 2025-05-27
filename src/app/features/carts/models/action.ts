import { Item } from "./item"

export type CartAction = {
  type: 'add' | 'remove' | 'update' | 'clear',
  item ?: Item
}
