'use client'

import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'
import useCart from '@/stores/cart'

export default function CheckoutPage({ children }: PropsWithChildren) {
  const cartItems = useCart(state => state.items)

  if (!cartItems.length) return redirect('/')

  return children
}
