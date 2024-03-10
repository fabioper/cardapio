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
  addItem: (product: CartItem) => void
  removeItem: (product: CartItem) => void
  updateItem: (product: CartItem) => void
}

const useCart = create<CartState>(set => ({
  items: [],
  addItem: product => set(state => ({ items: [...state.items, product] })),
  removeItem: product => {
    set(state => {
      return {
        items: state.items.filter(item => item.id !== product.id),
      }
    })
  },
  updateItem: product => {
    set(state => ({
      items: state.items.map(item => {
        if (item.id === product.id) {
          return product
        }
        return item
      }),
    }))
  },
}))

export default useCart
