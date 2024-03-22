'use client'

import { ActionBar, Button } from '@cardapio/ui/components'
import React from 'react'

export default function PaymentForm() {
  return (
    <form className="flex flex-col gap-5">
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

      <ActionBar>
        <div className="container">
          <Button label="Continuar" className="w-full" />
        </div>
      </ActionBar>
    </form>
  )
}
