'use client'

import { Button } from '@cardapio/ui/components'

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

      <div className="flex items-center justify-end">
        <Button label="Continuar" />
      </div>
    </form>
  )
}
