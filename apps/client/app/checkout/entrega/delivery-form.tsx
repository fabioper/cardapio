'use client'

import { Button } from '@cardapio/ui/components'

export default function DeliveryForm() {
  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Endereço</label>
        <input type="text" id="name" />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="number">Número</label>
        <input type="text" id="number" />
      </div>

      <div className="flex items-center justify-end">
        <Button label="Continuar" />
      </div>
    </form>
  )
}
