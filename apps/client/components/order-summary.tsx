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
import { useCallback, useMemo, useState } from 'react'
import CartItems from '@/components/cart-items'
import OrderTotalSummary from '@/components/order-total-summary'
import { addOrder, AddOrderDto } from '@/services/orders.service'
import { useRouter } from 'next/navigation'

export default function OrderSummary() {
  const smallScreen = useSmallScreen()
  const { customer, delivery, payment, clearCheckout } = useCheckout()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const { items } = useCart()

  const { total, deliveryFee } = useMemo(() => {
    const subtotal = items.reduce((a, b) => a + b.product.price * b.quantity, 0)
    const deliveryFee = 3
    const total = subtotal + deliveryFee

    return { subtotal, deliveryFee, total }
  }, [items])

  const sendOrder = useCallback(async () => {
    setLoading(true)
    try {
      const newOrder = {
        items: items.map(item => ({
          quantity: item.quantity,
          complement: item.complement,
          productId: item.product.id,
        })),
        payment: payment,
        customer: customer,
      } satisfies AddOrderDto

      await addOrder(newOrder)

      router.push('/sucesso')
      router.refresh()
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [customer, items, payment, router])

  return (
    <div className="flex flex-col gap-5 items-start max-w-xl">
      <div className="px-5 w-full">
        <CartItems />
      </div>

      <div className="bg-surface-b bg-opacity-40 py-2 px-5 rounded-2xl w-full">
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

      <OrderTotalSummary
        subtotal={total}
        deliveryFee={deliveryFee}
        total={total}
      />

      {smallScreen ? (
        <ActionBar>
          <div className="container">
            <Button
              label={!loading ? 'Confirmar pedido' : 'Enviando...'}
              className="w-full"
              icon={TbCircleCheck}
              itemRight={formatCurrency(total)}
              onClick={sendOrder}
              type="button"
            />
          </div>
        </ActionBar>
      ) : (
        <Button
          label={!loading ? 'Confirmar pedido' : 'Enviando...'}
          icon={TbCircleCheck}
          itemRight={formatCurrency(total)}
          onClick={sendOrder}
          type="button"
        />
      )}
    </div>
  )
}
