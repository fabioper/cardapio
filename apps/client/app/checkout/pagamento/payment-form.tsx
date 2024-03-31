'use client'

import { ActionBar, Button, RadioButton } from '@cardapio/ui/components'
import React, { useCallback } from 'react'
import { HiCash, HiCreditCard } from 'react-icons/hi'
import { MdOutlinePix } from 'react-icons/md'
import { IconType } from 'react-icons'
import { useSmallScreen } from '@/hooks/use-small-screen'
import { Payment, useCheckout } from '@/stores/checkout'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

type PaymentOption = {
  label: string
  icon: IconType
  value: string
}

const options: PaymentOption[] = [
  {
    label: 'Pix',
    icon: MdOutlinePix,
    value: 'pix',
  },
  {
    label: 'Dinheiro',
    icon: HiCash,
    value: 'cash',
  },
  {
    label: 'Cartão de crédito/débito',
    icon: HiCreditCard,
    value: 'card',
  },
]

export default function PaymentForm() {
  const smallScreen = useSmallScreen()
  const checkout = useCheckout()
  const router = useRouter()

  const { register, handleSubmit } = useForm<Payment>({
    defaultValues: checkout.payment,
    resolver: zodResolver(Payment),
  })

  const savePayment = useCallback(
    (values: Payment) => {
      checkout.setPayment(values)
      router.push('/checkout/resumo')
    },
    [checkout, router],
  )

  return (
    <form
      className="flex flex-col items-start gap-10"
      onSubmit={handleSubmit(savePayment)}
    >
      <div className="flex flex-col gap-x-2 gap-y-3 w-full">
        {options.map((opt, index) => {
          const { value, icon: Icon, label } = opt
          return (
            <label
              key={index}
              className={`
                group cursor-pointer grow transition-all
                flex items-center gap-2
                bg-surface-b bg-opacity-25
                border border-surface-b
                w-full p-5 rounded-xl
                hover:bg-opacity-70 hover:-translate-y-0.5
                has-[:checked]:bg-opacity-5
                has-[:checked]:text-primary
                has-[:checked]:bg-primary
                has-[:checked]:border-primary
              `}
            >
              <RadioButton value={value} {...register('method')} />
              <span className="flex items-center gap-2">
                <Icon className="text-xl opacity-45 shrink-0 group-has-[:checked]:text-primary" />{' '}
                {label}
              </span>
            </label>
          )
        })}
      </div>

      {smallScreen ? (
        <ActionBar>
          <div className="container">
            <Button label="Revisar pedido" className="w-full" />
          </div>
        </ActionBar>
      ) : (
        <Button label="Revisar pedido" />
      )}
    </form>
  )
}
