'use client'

import useCart from '@/stores/cart'
import Link from 'next/link'
import { TbPlus, TbShoppingBagCheck, TbShoppingBagX } from 'react-icons/tb'
import ActionBar from '@/components/action-bar'
import { formatCurrency } from '@/utils/formatter'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import clsx from 'clsx'
import CartItem from '@/components/cart-items/cart-item'
import { Button } from '@cardapio/ui/components'

function EmptyCart() {
  return (
    <div className="p-10 w-full max-w-xl border-2 border-dashed border-surface-b rounded flex flex-col gap-5 items-center justify-center text-surface-e">
      <TbShoppingBagX className="text-4xl opacity-30" />
      <p className="text-sm">Sua sacola está vazia</p>
    </div>
  )
}

function FinishOrderButton(props: { value: number }) {
  const isSmallScreen = useMediaQuery('(max-width: 500px)')

  return (
    <Button
      label="Finalizar pedido"
      icon={TbShoppingBagCheck}
      className={clsx({ 'w-full': isSmallScreen })}
      itemRight={formatCurrency(props.value)}
    />
  )
}

export default function CartItems() {
  const isSmallScreen = useMediaQuery('(max-width: 500px)')
  const { items } = useCart()

  const total = items.reduce((a, b) => a + b.product.price * b.quantity, 0)

  if (items.length === 0) return <EmptyCart />

  return (
    <div className="flex flex-col gap-5 items-center w-full max-w-2xl">
      <div className="flex flex-col divide-y divide-surface-b w-full">
        {items.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <div
        className={clsx('flex items-center justify-between', {
          'w-full': !isSmallScreen,
        })}
      >
        <Link href="/">
          <Button.Text
            icon={TbPlus}
            label="Adicionar mais itens"
            variant="info"
            size="small"
          />
        </Link>

        {isSmallScreen ? (
          <ActionBar>
            <div className="container">
              <FinishOrderButton value={total} />
            </div>
          </ActionBar>
        ) : (
          <Button
            label="Finalizar pedido"
            icon={TbShoppingBagCheck}
            className={clsx({ 'w-full': isSmallScreen })}
            itemRight={formatCurrency(total)}
          />
        )}
      </div>
    </div>
  )
}
