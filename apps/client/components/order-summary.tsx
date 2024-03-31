'use client'

import { ActionBar, Button } from '@cardapio/ui/components'
import { TbCircleCheck, TbEdit } from 'react-icons/tb'
import { useSmallScreen } from '@/hooks/use-small-screen'
import Link from 'next/link'
import { useCheckout } from '@/stores/checkout'
import { formatAddress, formatPaymentMethod } from '@/utils/formatter'

export default function OrderSummary() {
  const smallScreen = useSmallScreen()
  const { customer, delivery, payment } = useCheckout()

  return (
    <div className="flex flex-col gap-5 items-start">
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

      {smallScreen ? (
        <ActionBar>
          <div className="container">
            <Button
              label="Confirmar pedido"
              className="w-full"
              icon={TbCircleCheck}
            />
          </div>
        </ActionBar>
      ) : (
        <Button label="Confirmar pedido" />
      )}
    </div>
  )
}
