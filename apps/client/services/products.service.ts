import React from 'react'
import { api } from '@/services/api'

export interface Product {
  id: string
  title: string
  description: string
  price: number
  image?: { url: string; alt: string }
  combo?: boolean
  createdAt: string
}

export const getProducts = React.cache(async () => {
  const { data } = await api.get<Product[]>('/products')

  const byCreatedDate = (a: Product, b: Product) =>
    Date.parse(b.createdAt) - Date.parse(a.createdAt)

  return data.toSorted(byCreatedDate)
})

export const findProductById = React.cache(async (id: string) => {
  const { data } = await api.get<Product>(`/products/${id}`)
  return data
})
