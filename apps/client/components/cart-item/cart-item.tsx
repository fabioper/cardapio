import React from 'react'
import { Item } from '@/stores/cart'
import { formatCurrency } from '@/utils/formatter'
import Counter from '@/components/counter'

interface CartItemProps extends React.HTMLProps<HTMLDivElement> {
  cartItem: Item
}

export default function CartItem({ cartItem, ...props }: CartItemProps) {
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
        <div className="flex flex-col">
          <h3 className="flex items-center gap-2 font-semibold leading-snug">
            {cartItem.product.title}{' '}
            {/*<Button.Text icon={TbEdit} size="small" variant="info" />*/}
          </h3>

          <p className="">{formatCurrency(cartItem.product.price)}</p>
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

      <Counter value={cartItem.quantity} size="small" />
    </div>
  )
}
