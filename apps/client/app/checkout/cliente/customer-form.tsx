'use client'

import { ActionBar, Button } from '@cardapio/ui/components'

export default function CustomerForm() {
  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="tel">Telefone</label>
        <input type="tel" id="tel" />
      </div>

      <ActionBar>
        <div className="container">
          <Button label="Continuar" className="w-full" />
        </div>
      </ActionBar>
    </form>
  )
}
