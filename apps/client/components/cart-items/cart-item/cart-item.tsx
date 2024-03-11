'use client'

import React, { useCallback } from 'react'
import useCart, { Item } from '@/stores/cart'
import { formatCurrency } from '@/utils/formatter'
import Counter from '@/components/counter'
import Button from '@/components/button'
import { TbEdit } from 'react-icons/tb'
import Link from 'next/link'

interface CartItemProps extends React.HTMLProps<HTMLDivElement> {
  cartItem: Item
}

export default function CartItem({ cartItem, ...props }: CartItemProps) {
  const { remove, update } = useCart()

  const handleRemove = useCallback(() => {
    remove(cartItem.id)
  }, [cartItem, remove])

  const handleQuantityChange = useCallback(
    (quantity = 1) => {
      update({ ...cartItem, quantity })
    },
    [cartItem, update],
  )

  return (
    <div {...props} className="flex items-start gap-5 py-5">
      {cartItem.product.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={cartItem.product.image.url}
          alt={cartItem.product.image.alt}
          className="h-14 aspect-square object-cover rounded shadow-lg"
        />
      )}

      <div className="grow flex flex-col gap-5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col">
            <h3 className="flex items-center gap-2 font-semibold leading-snug">
              {cartItem.product.title}

              <Link href={`/pedido/${cartItem.id}`}>
                <Button.Text icon={TbEdit} size="small" variant="primary" />
              </Link>
            </h3>

            <p className="">{formatCurrency(cartItem.product.price)}</p>
          </div>

          <Counter
            value={cartItem.quantity}
            size="small"
            removable
            onRemove={handleRemove}
            onChange={handleQuantityChange}
          />
        </div>

        {cartItem.complement && (
          <div>
            <label className="text-sm font-semibold">Complemento:</label>
            <p className="text-sm font-normal opacity-75">
              {cartItem.complement}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
