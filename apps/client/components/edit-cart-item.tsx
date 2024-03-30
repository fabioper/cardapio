'use client'

import useCart from '@/stores/cart'
import { notFound } from 'next/navigation'
import React from 'react'
import ProductDetails from '@/components/product-details'

export default function EditCartItem({ itemId }: { itemId: string }) {
  const items = useCart(state => state.items)
  const item = items.find(item => item.id === itemId)

  if (!item) return notFound()

  const { product, ...cartItem } = item

  return <ProductDetails product={product} cartItem={cartItem} />
}
