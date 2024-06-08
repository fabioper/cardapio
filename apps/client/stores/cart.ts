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
  add: (item: Item) => void
  remove: (itemId: string) => void
  update: (item: Item) => void
  clearCart: () => void
}

const findExistingItem = (items: Item[], newItem: Item) => {
  return items.find(item => {
    return (
      item.id !== newItem.id &&
      _.isEqual(
        _.omit(item, ['quantity', 'id']),
        _.omit(newItem, ['quantity', 'id']),
      )
    )
  })
}

const useCart = create<CartState>((set, get) => ({
  items: [],
  add: newItem => {
    const existing = findExistingItem(get().items, newItem)

    if (!existing) {
      return set(state => ({ items: [...state.items, newItem] }))
    }

    get().update({
      ...existing,
      quantity: existing.quantity + newItem.quantity,
    })
  },
  remove: itemId => {
    set(state => ({
      items: state.items.filter(({ id }) => id !== itemId),
    }))
  },
  update: updatedItem => {
    const existing = findExistingItem(get().items, updatedItem)

    if (existing) {
      const mergedItem = {
        ...updatedItem,
        quantity: existing.quantity + updatedItem.quantity,
      }

      set(state => ({
        items: state.items.map(item =>
          item.id !== updatedItem.id ? item : mergedItem,
        ),
      }))

      return get().remove(existing.id)
    }

    set(state => ({
      items: state.items.map(item =>
        item.id === updatedItem.id ? updatedItem : item,
      ),
    }))
  },
  clearCart: () =>
    set(() => ({
      items: [],
    })),
}))

export default useCart
