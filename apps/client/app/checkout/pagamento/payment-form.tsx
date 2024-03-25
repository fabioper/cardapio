'use client'

import { ActionBar, Button, RadioButton } from '@cardapio/ui/components'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import clsx from 'clsx'
import Link from 'next/link'
import { FaCreditCard, FaMoneyBill, FaPix, FaTicket } from 'react-icons/fa6'

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

  return (
    <form className="flex flex-col gap-10 items-start">
      <div className="flex flex-col gap-5 items-start">
        <div className="flex items-center gap-2">
          <RadioButton name="payment" id="pix" />
          <label htmlFor="pix" className="flex items-center gap-2">
            <FaPix className="text-surface-e" /> Pix
          </label>
        </div>

        <div className="flex items-center gap-2">
          <RadioButton name="payment" id="cash" />
          <label htmlFor="cash" className="flex items-center gap-2">
            <FaMoneyBill className="text-surface-e" /> Dinheiro
          </label>
        </div>

        <div className="flex items-center gap-2">
          <RadioButton name="payment" id="card" />
          <label htmlFor="card" className="flex items-center gap-2">
            <FaCreditCard className="text-surface-e" />
            Cartão de crédito/débito
          </label>
        </div>

        <div className="flex items-center gap-2">
          <RadioButton name="payment" id="ticket" />
          <label htmlFor="ticket" className="flex items-center gap-2">
            <FaTicket className="text-surface-e" />
            Ticket refeição
          </label>
        </div>
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
