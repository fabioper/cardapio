'use client'

import { PropsWithChildren } from 'react'
import useCart from '@/stores/cart'
import { redirect } from 'next/navigation'

export default function CheckoutPage({ children }: PropsWithChildren) {
  const cartItems = useCart(state => state.items)

  if (!cartItems.length) return redirect('/')

  return children
}
