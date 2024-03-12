'use client'

import Button from '@/components/button'
import { TbShoppingBag } from 'react-icons/tb'
import Link from 'next/link'
import React, { useMemo } from 'react'
import useCart from '@/stores/cart'

export default function CartButton() {
  const items = useCart(state => state.items)

  const totalItems = useMemo(() => {
    return items.reduce((a, b) => a + b.quantity, 0)
  }, [items])

  if (totalItems <= 0) {
    return (
      <Link href="/pedido">
        <Button.Text icon={TbShoppingBag} variant="secondary" rounded />
      </Link>
    )
  }

  return (
    <Link href="/pedido">
      <Button.Text
        icon={TbShoppingBag}
        variant="primary"
        label={`${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`}
        rounded
      />
    </Link>
  )
}
