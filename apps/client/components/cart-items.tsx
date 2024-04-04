'use client'

import Link from 'next/link'
import { TbPlus, TbShoppingBagX } from 'react-icons/tb'
import React from 'react'
import { Button } from '@cardapio/ui/components'
import useCart from '@/stores/cart'
import CartItem from '@/components/cart-item'

function EmptyCart() {
  return (
    <div className="p-10 w-full max-w-xl border-2 border-dashed border-surface-b rounded flex flex-col gap-5 items-center justify-center text-surface-e">
      <TbShoppingBagX className="text-4xl opacity-30" />
      <p className="text-sm">Sua sacola está vazia</p>
    </div>
  )
}

export default function CartItems() {
  const items = useCart(state => state.items)

  if (items.length === 0) return <EmptyCart />

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col divide-y divide-surface-b w-full">
        {items.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Link href="/">
        <Button
          variant="text"
          icon={TbPlus}
          label="Adicionar mais itens"
          status="info"
          size="small"
        />
      </Link>
    </div>
  )
}
