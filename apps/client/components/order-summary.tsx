'use client'

import { ActionBar, Button } from '@cardapio/ui/components'
import { TbCircleCheck, TbEdit } from 'react-icons/tb'
import { useSmallScreen } from '@/hooks/use-small-screen'
import Link from 'next/link'
import { useCheckout } from '@/stores/checkout'
import {
  formatAddress,
  formatCurrency,
  formatPaymentMethod,
} from '@/utils/formatter'
import useCart from '@/stores/cart'
import { useMemo } from 'react'
import CartItems from '@/components/cart-items'

export default function OrderSummary() {
  const smallScreen = useSmallScreen()
  const { customer, delivery, payment } = useCheckout()
  const items = useCart(cart => cart.items)

  const { total, deliveryFee, subtotal } = useMemo(() => {
    const subtotal = items.reduce((a, b) => a + b.product.price * b.quantity, 0)
    const deliveryFee = 3
    const total = subtotal + deliveryFee

    return { subtotal, deliveryFee, total }
  }, [items])

  return (
    <div className="flex flex-col gap-5 items-start">
      <div className="px-5">
        <CartItems />
      </div>

      <div className="max-w-xl bg-surface-b bg-opacity-40 py-2 px-5 rounded-2xl w-full">
        <h3 className="text-base font-bold flex items-center justify-between">
          Cliente{' '}
          <Link href="/checkout/cliente">
            <Button variant={'text'} size={'small'} icon={TbEdit} />
          </Link>
        </h3>
        <p className="text-sm opacity-50">
          {customer.name}
          <br />
          {customer.phone}
        </p>
      </div>

      <div className="max-w-xl bg-surface-b bg-opacity-40 py-2 px-5 rounded-2xl w-full">
        <h3 className="text-base font-bold flex items-center justify-between">
          Endereço de entrega{' '}
          <Link href="/checkout/entrega">
            <Button variant={'text'} size={'small'} icon={TbEdit} />
          </Link>
        </h3>
        <p className="text-sm opacity-50">{formatAddress(delivery)}</p>
      </div>

      <div className="max-w-xl bg-surface-b bg-opacity-40 py-2 px-5 rounded-2xl w-full">
        <h3 className="text-base font-bold flex items-center justify-between">
          Forma de pagamento{' '}
          <Link href="/checkout/pagamento">
            <Button variant={'text'} size={'small'} icon={TbEdit} />
          </Link>
        </h3>
        <p className="text-sm opacity-50">
          {formatPaymentMethod(payment.method)}
        </p>
      </div>

      <dl className="w-full mt-auto">
        <div className="flex items-center justify-between">
          <dt className="text-sm opacity-75">Sub-total</dt>
          <dd className="text-sm">{formatCurrency(subtotal)}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-sm opacity-75">Frete</dt>
          <dd className="text-sm">{formatCurrency(deliveryFee)}</dd>
        </div>
        <div className="flex items-center justify-between mt-5">
          <dt className="text-sm opacity-75">Total</dt>
          <dd className="text-base font-bold">{formatCurrency(total)}</dd>
        </div>
      </dl>

      {smallScreen ? (
        <ActionBar>
          <div className="container">
            <Button
              label="Confirmar pedido"
              className="w-full"
              icon={TbCircleCheck}
              itemRight={formatCurrency(subtotal)}
            />
          </div>
        </ActionBar>
      ) : (
        <Button label="Confirmar pedido" />
      )}
    </div>
  )
}
