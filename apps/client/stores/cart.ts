import { create } from 'zustand'
import { Product } from '@/services/products.service'

export interface Item {
  id: string
  quantity: number
  product: Product
  complement?: string
}

interface CartState {
  items: Item[]
  add: (item: Item) => void
  remove: (itemId: string) => void
  update: (item: Item) => void
}

const useCart = create<CartState>((set, get) => ({
  items: [],
  add: newItem => {
    set(state => ({ items: [...state.items, newItem] }))
  },
  remove: itemId => {
    set(state => ({
      items: state.items.filter(({ id }) => id !== itemId),
    }))
  },
  update: updatedItem => {
    set(state => ({
      items: state.items.map(item =>
        item.id === updatedItem.id ? updatedItem : item,
      ),
    }))
  },
}))

export default useCart
