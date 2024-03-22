'use client'

import { ActionBar, Button } from '@cardapio/ui/components'
import React from 'react'

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

      <ActionBar>
        <div className="container">
          <Button label="Continuar" className="w-full" />
        </div>
      </ActionBar>
    </form>
  )
}
