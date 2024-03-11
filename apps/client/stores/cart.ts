import { create } from 'zustand'
import { Product } from '@/services/products.service'
import _ from 'lodash'

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
    const items = get().items

    const productAlreadyOnCart = items.find(item =>
      _.isEqual(
        _.omit(item, ['quantity', 'id']),
        _.omit(newItem, ['quantity', 'id']),
      ),
    )

    if (productAlreadyOnCart) {
      return set(state => ({
        items: state.items.map(item => ({
          ...newItem,
          quantity: item.quantity + newItem.quantity,
        })),
      }))
    }

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
