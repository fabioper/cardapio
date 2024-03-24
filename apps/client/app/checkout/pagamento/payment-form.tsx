'use client'

import { ActionBar, Button } from '@cardapio/ui/components'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import clsx from 'clsx'

export default function PaymentForm() {
  const smallScreen = useMediaQuery('(max-width: 500px)')

  const button = (
    <Button label="Continuar" className={clsx({ 'w-full': smallScreen })} />
  )

  return (
    <form className="flex flex-col gap-5 items-start">
      <div className="flex items-center gap-2">
        <input type="radio" name="payment" id="cash" />
        <label htmlFor="cash">Dinheiro</label>
      </div>

      <div className="flex items-center gap-2">
        <input type="radio" name="payment" id="card" />
        <label htmlFor="card">Cartão de crédito/débito</label>
      </div>

      <div className="flex items-center gap-2">
        <input type="radio" name="payment" id="ticket" />
        <label htmlFor="ticket">Ticket refeição</label>
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
