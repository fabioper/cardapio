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
  addItem: (item: Item) => void
  removeItem: (item: Item) => void
  updateItem: (item: Item) => void
}

const useCart = create<CartState>((set, get) => ({
  items: [],
  addItem: newItem => {
    set(state => ({ items: [...state.items, newItem] }))
  },
  removeItem: removedItem => {
    set(state => ({
      items: state.items.filter(({ id }) => id !== removedItem.id),
    }))
  },
  updateItem: updatedItem => {
    set(state => ({
      items: state.items.map(item =>
        item.id === updatedItem.id ? updatedItem : item,
      ),
    }))
  },
}))

export default useCart
