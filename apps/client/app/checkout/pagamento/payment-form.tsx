'use client'

import { ActionBar, Button, RadioButton } from '@cardapio/ui/components'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import clsx from 'clsx'
import Link from 'next/link'
import { HiCash, HiCreditCard } from 'react-icons/hi'
import { MdOutlinePix } from 'react-icons/md'
import { IconType } from 'react-icons'

export default function PaymentForm() {
  const smallScreen = useMediaQuery('(max-width: 500px)')

  const button = (
    <Link href="/checkout/resumo">
      <Button
        label="Revisar pedido"
        className={clsx({ 'w-full': smallScreen })}
      />
    </Link>
  )

  const options: {
    label: string
    icon: IconType
    value: string
  }[] = [
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

  return (
    <form className="flex flex-col items-start gap-10">
      <div className="flex flex-col gap-x-2 gap-y-3 w-full md:flex-row">
        {options.map((opt, index) => {
          const { value, icon: Icon, label } = opt
          return (
            <label
              key={index}
              className={`
                group cursor-pointer grow transition-all
                flex items-center gap-2
                bg-surface-b bg-opacity-25
                w-full p-5 rounded-xl
                hover:bg-opacity-70 hover:-translate-y-0.5
                has-[:checked]:bg-opacity-5
                has-[:checked]:text-primary
                has-[:checked]:bg-primary
              `}
            >
              <RadioButton name="payment" value={value} />
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
          <div className="container">{button}</div>
        </ActionBar>
      ) : (
        button
      )}
    </form>
  )
}
