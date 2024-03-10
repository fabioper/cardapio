'use client'

import { Item } from '@/stores/cart'
import CartItem from '@/components/cart-item'
import Link from 'next/link'
import Button from '@/components/button'
import { TbPlus, TbShoppingBagCheck } from 'react-icons/tb'
import ActionBar from '@/components/action-bar'
import { formatCurrency } from '@/utils/formatter'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import clsx from 'clsx'

interface CartItemsProps {
  items: Item[]
}

export default function CartItems({ items }: CartItemsProps) {
  const isSmallScreen = useMediaQuery('(max-width: 500px)')

  const total = items.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0)

  const buttons = (
    <Button
      label="Finalizar pedido"
      icon={TbShoppingBagCheck}
      className={clsx({ 'w-full': isSmallScreen })}
      itemRight={formatCurrency(total)}
    />
  )
  return (
    <React.Fragment>
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
              <div className="container">{buttons}</div>
            </ActionBar>
          ) : (
            buttons
          )}
        </div>
      </div>
    </React.Fragment>
  )
}
