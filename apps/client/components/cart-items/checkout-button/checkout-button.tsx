'use client'

import { useMediaQuery } from 'usehooks-ts'
import { TbShoppingBagCheck } from 'react-icons/tb'
import clsx from 'clsx'
import { formatCurrency } from '@/utils/formatter'
import React from 'react'
import { ActionBar, Button } from '@cardapio/ui/components'
import useCart from '@/stores/cart'
import { isEmpty } from 'lodash'
import Link from 'next/link'

export default function CheckoutButton() {
  const isSmallScreen = useMediaQuery('(max-width: 500px)')
  const items = useCart(state => state.items)

  const total = items.reduce((a, b) => a + b.product.price * b.quantity, 0)

  if (isEmpty(items)) return <></>

  const button = (
    <div className="flex justify-center w-full">
      <Link href="/checkout" className={clsx({ 'w-full': isSmallScreen })}>
        <Button
          label="Finalizar pedido"
          icon={TbShoppingBagCheck}
          className={clsx({ 'w-full': isSmallScreen })}
          itemRight={formatCurrency(total)}
        />
      </Link>
    </div>
  )

  if (isSmallScreen) {
    return (
      <ActionBar>
        <div className="container">{button}</div>
      </ActionBar>
    )
  }

  return button
}
