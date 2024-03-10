import { create } from 'zustand'
import { Product } from '@/services/products.service'

interface CartItem {
  id: string
  quantity: number
  product: Product
  complement?: string
}

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (item: CartItem) => void
  updateItem: (item: CartItem) => void
}

const useCart = create<CartState>(set => ({
  items: [],
  addItem: newItem => set(state => ({ items: [...state.items, newItem] })),
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
