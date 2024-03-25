'use client'

import { ActionBar, Button } from '@cardapio/ui/components'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import clsx from 'clsx'
import Link from 'next/link'

export default function DeliveryForm() {
  const smallScreen = useMediaQuery('(max-width: 500px)')

  const button = (
    <Link href="/checkout/pagamento">
      <Button label="Continuar" className={clsx({ 'w-full': smallScreen })} />
    </Link>
  )

  return (
    <form className="flex flex-col gap-5">
      <div className="grid md:grid-cols-[2fr_1fr] gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Endereço</label>
          <input type="text" id="name" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="number">Número</label>
          <input type="text" id="number" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="district">Bairro</label>
          <input type="text" id="district" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="city">Cidade</label>
          <input type="text" id="city" />
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="cep">CEP</label>
          <input type="text" id="cep" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="complement">Complemento</label>
          <input type="text" id="complement" />
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
