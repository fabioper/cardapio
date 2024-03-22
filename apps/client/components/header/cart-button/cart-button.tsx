'use client'

import { TbShoppingBag } from 'react-icons/tb'
import Link from 'next/link'
import React, { useMemo } from 'react'
import useCart from '@/stores/cart'
import { Button } from '@cardapio/ui/components'

export default function CartButton() {
  const items = useCart(state => state.items)

  const totalItems = useMemo(() => {
    return items.reduce((a, b) => a + b.quantity, 0)
  }, [items])

  if (totalItems === 0) {
    return (
      <Link href="/pedido">
        <Button icon={TbShoppingBag} variant="text" status="secondary" />
      </Link>
    )
  }

  return (
    <Link href="/pedido">
      <Button
        icon={TbShoppingBag}
        variant="filled"
        status="primary"
        badge={totalItems}
      />
    </Link>
  )
}
